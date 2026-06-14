import {
  Keypair,
  Networks,
  rpc,
  TransactionBuilder,
  Contract,
  nativeToScVal,
  BASE_FEE,
} from "@stellar/stellar-sdk";

// ─── 1. Configuration ─────────────────────────────────────────────────────────
const CONFIG = {
  PORT: process.env.PORT ?? 8080,
  NETWORK_PASSPHRASE: Networks.TESTNET,
  RPC_URL: process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org",
  CONTRACT_ID: process.env.HOLD_CONTRACT_ID!,
  AUTHORITY_SECRET: process.env.BESHIELD_AUTHORITY_SECRET!,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
};

if (!CONFIG.CONTRACT_ID || !CONFIG.AUTHORITY_SECRET) {
  throw new Error("Missing required environment variables.");
}

// ─── 2. Blockchain Service ──────────────────────────────────────────────────
const server = new rpc.Server(CONFIG.RPC_URL, { allowHttp: false });
const authorityKeypair = Keypair.fromSecret(CONFIG.AUTHORITY_SECRET);
const contract = new Contract(CONFIG.CONTRACT_ID);

async function submitVerdictToLedger(holdId: string, isClear: boolean) {
  const account = await server.getAccount(authorityKeypair.publicKey());
  
  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: CONFIG.NETWORK_PASSPHRASE,
  })
    .addOperation(
      contract.call("submit_verdict", nativeToScVal(holdId, { type: "string" }), nativeToScVal(isClear, { type: "bool" }))
    )
    .setTimeout(30)
    .build();

  const simulation = await server.simulateTransaction(tx);
  if (rpc.Api.isSimulationError(simulation)) throw new Error(`Sim failed: ${simulation.error}`);

  const preparedTx = rpc.assembleTransaction(tx, simulation).build();
  preparedTx.sign(authorityKeypair);
  
  return await server.sendTransaction(preparedTx);
}

// ─── 3. Consensus Engine ──────────────────────────────────────────────────────
const ORACLE_NODES = [
  "node_domain", "node_language", "node_behavior", "node_graph", 
  "node_bank", "node_device", "node_history", "node_transaction", "node_identity"
];

async function runOracleEvaluation(holdId: string, nodeName: string): Promise<boolean> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: `Analyze the transaction ${holdId} for the oracle: ${nodeName}. Is this transaction safe? Return only 'safe' or 'flag'.` }]
    }),
  });

  const data = await response.json();
  const verdict = data.choices[0].message.content.toLowerCase();
  return verdict.includes("safe");
}

async function orchestrateConsensus(holdId: string) {
  // Select Sub-Quorum
  const quorumSize = 4 + Math.floor(Math.random() * 3);
  const activeNodes = [...ORACLE_NODES].sort(() => Math.random() - 0.5).slice(0, quorumSize);

  // Run evaluations in parallel
  const results = await Promise.all(activeNodes.map(node => runOracleEvaluation(holdId, node)));
  
  const affirmativeVotes = results.filter(r => r === true).length;
  const threshold = Math.ceil((quorumSize * 2) / 3);
  const pass = affirmativeVotes >= threshold;

  console.log(`[Consensus] Votes: ${affirmativeVotes}/${quorumSize}. Passed: ${pass}`);
  return pass;
}

// ─── 4. Server Layer ──────────────────────────────────────────────────────────
Bun.serve({
  port: CONFIG.PORT,
  async fetch(req) {
    const url = new URL(req.url);

    // CORS Handling
    if (req.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" }});

    if (url.pathname === "/api/verdict" && req.method === "POST") {
      try {
        const { holdId } = await req.json();
        if (!holdId) return Response.json({ error: "Missing holdId" }, { status: 400 });

        const isClear = await orchestrateConsensus(holdId);
        const result = await submitVerdictToLedger(holdId, isClear);

        return Response.json({ success: true, txHash: result.hash, verdict: isClear ? "CLEAR" : "FLAG" }, { headers: { "Access-Control-Allow-Origin": "*" }});
      } catch (err: any) {
        return Response.json({ error: err.message }, { status: 500 });
      }
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`✓ BEShield Engine running on http://localhost:${CONFIG.PORT}`);