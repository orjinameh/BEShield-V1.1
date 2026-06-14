/**
 * lock-payment.ts
 *
 * Called by BEShield when a payment request email is detected.
 * Instructs the payer to lock USDC in the Soroban hold contract
 * instead of sending directly — making BEShield evaluation mandatory.
 *
 * Usage:
 *   npx ts-node scripts/lock-payment.ts \
 *     --hold-id <uuid> \
 *     --payer <G...> \
 *     --recipient <G...> \
 *     --amount 50000 \
 *     --payer-secret <S...>
 */

import {
  Keypair,
  Networks,
  SorobanRpc,
  TransactionBuilder,
  Contract,
  nativeToScVal,
  Address,
  scValToNative,
  BASE_FEE,
} from "@stellar/stellar-sdk";
import { parseArgs } from "util";

// ─── Config ──────────────────────────────────────────────────────────────────

const NETWORK_PASSPHRASE = Networks.TESTNET;
const RPC_URL = process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org";

// USDC issuer on Stellar testnet (Circle testnet USDC)
const USDC_CONTRACT = process.env.USDC_CONTRACT_ADDRESS ?? "CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA";

// Deployed BEShield hold contract ID (set after deployment)
const HOLD_CONTRACT_ID = process.env.HOLD_CONTRACT_ID;
if (!HOLD_CONTRACT_ID) throw new Error("HOLD_CONTRACT_ID env var required");

// ─── Main ────────────────────────────────────────────────────────────────────

async function lockPayment(args: {
  holdId: string;
  payerSecret: string;
  recipientAddress: string;
  amount: bigint; // in stroops (1 USDC = 10_000_000 stroops)
}) {
  const { holdId, payerSecret, recipientAddress, amount } = args;

  const payer = Keypair.fromSecret(payerSecret);
  const server = new SorobanRpc.Server(RPC_URL, { allowHttp: false });
  const account = await server.getAccount(payer.publicKey());

  const contract = new Contract(HOLD_CONTRACT_ID!);

  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: NETWORK_PASSPHRASE,
  })
    .addOperation(
      contract.call(
        "lock",
        nativeToScVal(holdId, { type: "string" }),
        new Address(payer.publicKey()).toScVal(),
        new Address(recipientAddress).toScVal(),
        new Address(USDC_CONTRACT).toScVal(),
        nativeToScVal(amount, { type: "i128" }),
      )
    )
    .setTimeout(30)
    .build();

  // Simulate first to get footprint
  const sim = await server.simulateTransaction(tx);
  if (SorobanRpc.Api.isSimulationError(sim)) {
    throw new Error(`Simulation failed: ${sim.error}`);
  }

  const prepared = SorobanRpc.assembleTransaction(tx, sim).build();
  prepared.sign(payer);

  const result = await server.sendTransaction(prepared);
  console.log(`✓ Payment locked on Stellar testnet`);
  console.log(`  Hold ID:     ${holdId}`);
  console.log(`  Payer:       ${payer.publicKey()}`);
  console.log(`  Recipient:   ${recipientAddress}`);
  console.log(`  Amount:      ${Number(amount) / 10_000_000} USDC`);
  console.log(`  TX hash:     ${result.hash}`);
  console.log(`  Explorer:    https://stellar.expert/explorer/testnet/tx/${result.hash}`);

  return result.hash;
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    "hold-id":       { type: "string" },
    "payer-secret":  { type: "string" },
    "recipient":     { type: "string" },
    "amount-usdc":   { type: "string" }, // human-readable USDC amount e.g. "5000"
  },
});

if (!values["hold-id"] || !values["payer-secret"] || !values["recipient"] || !values["amount-usdc"]) {
  console.error("Usage: npx ts-node scripts/lock-payment.ts --hold-id <uuid> --payer-secret <S...> --recipient <G...> --amount-usdc <number>");
  process.exit(1);
}

const amountStroops = BigInt(Math.round(parseFloat(values["amount-usdc"]!) * 10_000_000));

lockPayment({
  holdId:           values["hold-id"]!,
  payerSecret:      values["payer-secret"]!,
  recipientAddress: values["recipient"]!,
  amount:           amountStroops,
}).catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
