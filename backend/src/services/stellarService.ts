import { TransactionBuilder, Contract, Address, xdr, Keypair, rpc } from "@stellar/stellar-sdk";

// 1. Connect to the network node
const server = new rpc.Server("https://soroban-testnet.stellar.org:443");

// 2. Load your Oracle credentials
const oracleKeypair = Keypair.fromSecret(process.env.BESHIELD_AUTHORITY_SECRET!);

export async function executeVerdict(contractId: string, isSafe: boolean) {
  // 2. Fetch network fee and account sequence details
  const sourceAccount = await server.getAccount(oracleKeypair.publicKey());
  
  const contract = new Contract(contractId);
  
  // 3. Construct the Soroban Contract Invocation call
  let tx = new TransactionBuilder(sourceAccount, {
    fee: "100000",
    networkPassphrase: "Test SDF Network ; September 2015"
  })
  .addOperation(
    contract.call(
      "set_verdict",
      new Address(oracleKeypair.publicKey()).toScVal(), // caller
      xdr.ScVal.scvBool(isSafe)                         // is_safe
    )
  )
  .setTimeout(30)
  .build();

  // 4. CRITICAL: Prepare the transaction (handles resource fee simulation)
  tx = await server.prepareTransaction(tx);

  // 5. CRITICAL STEP FOR txBadAuth: Explicitly sign the transaction payload 
  // with the Oracle key so that require_auth() passes on-chain
  tx.sign(oracleKeypair);

  // 6. Submit finalized envelope to Network
  const response = await server.sendTransaction(tx);
  
  if (response.status === "ERROR") {
    throw new Error(`Tx Failed: ${JSON.stringify(response.errorResult)}`);
  }
  
  return response;
}