/**
 * submit-verdict.ts
 *
 * Called by the BEShield consensus engine after BFT evaluation completes.
 * Submits the CLEAR or FLAG verdict to the Soroban hold contract,
 * which then releases or returns the locked USDC.
 *
 * This is the bridge between the AI consensus layer and Stellar enforcement.
 *
 * Usage:
 *   npx ts-node scripts/submit-verdict.ts \
 *     --hold-id <uuid> \
 *     --verdict clear|flag
 *
 * The BESHIELD_AUTHORITY_SECRET env var must be set to the keypair
 * registered as authority at contract deployment.
 */

import {
  Keypair,
  Networks,
  SorobanRpc,
  TransactionBuilder,
  Contract,
  nativeToScVal,
  BASE_FEE,
} from "@stellar/stellar-sdk";
import { parseArgs } from "util";

// ─── Config ──────────────────────────────────────────────────────────────────

const NETWORK_PASSPHRASE = Networks.TESTNET;
const RPC_URL = process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org";
const HOLD_CONTRACT_ID = process.env.HOLD_CONTRACT_ID;

if (!HOLD_CONTRACT_ID) throw new Error("HOLD_CONTRACT_ID env var required");

const AUTHORITY_SECRET = process.env.BESHIELD_AUTHORITY_SECRET;
if (!AUTHORITY_SECRET) throw new Error("BESHIELD_AUTHORITY_SECRET env var required");

// ─── Submit verdict ───────────────────────────────────────────────────────────

async function submitVerdict(holdId: string, verdict: boolean) {
  const authority = Keypair.fromSecret(AUTHORITY_SECRET!);
  const server = new SorobanRpc.Server(RPC_URL, { allowHttp: false });
  const account = await server.getAccount(authority.publicKey());

  const contract = new Contract(HOLD_CONTRACT_ID!);

  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: NETWORK_PASSPHRASE,
  })
    .addOperation(
      contract.call(
        "submit_verdict",
        nativeToScVal(holdId, { type: "string" }),
        nativeToScVal(verdict, { type: "bool" }),
      )
    )
    .setTimeout(30)
    .build();

  const sim = await server.simulateTransaction(tx);
  if (SorobanRpc.Api.isSimulationError(sim)) {
    throw new Error(`Simulation failed: ${sim.error}`);
  }

  const prepared = SorobanRpc.assembleTransaction(tx, sim).build();
  prepared.sign(authority);

  const result = await server.sendTransaction(prepared);

  const label = verdict ? "CLEAR — funds released to recipient" : "FLAG  — funds returned to payer";
  console.log(`✓ Verdict submitted`);
  console.log(`  Hold ID:  ${holdId}`);
  console.log(`  Verdict:  ${label}`);
  console.log(`  TX hash:  ${result.hash}`);
  console.log(`  Explorer: https://stellar.expert/explorer/testnet/tx/${result.hash}`);

  return result.hash;
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    "hold-id": { type: "string" },
    "verdict": { type: "string" }, // "clear" or "flag"
  },
});

if (!values["hold-id"] || !values["verdict"]) {
  console.error('Usage: npx ts-node scripts/submit-verdict.ts --hold-id <uuid> --verdict clear|flag');
  process.exit(1);
}

if (!["clear", "flag"].includes(values["verdict"]!)) {
  console.error('--verdict must be "clear" or "flag"');
  process.exit(1);
}

const verdict = values["verdict"] === "clear";

submitVerdict(values["hold-id"]!, verdict).catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
