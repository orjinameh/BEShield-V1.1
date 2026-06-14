#!/usr/bin/env bash
# deploy.sh
# Builds and deploys the BEShield payment hold contract to Stellar testnet.
# Requires: stellar CLI, Rust + cargo, soroban target installed.
#
# Run once: rustup target add wasm32-unknown-unknown
#           cargo install --locked stellar-cli --features opt

set -e

NETWORK="testnet"
DEPLOYER_ALIAS="beshield-deployer"  # stellar CLI identity alias

echo "── Building contract ─────────────────────────────────────────"
cd "$(dirname "$0")/../contracts/payment_hold"
cargo build --target wasm32-unknown-unknown --release

WASM="target/wasm32-unknown-unknown/release/payment_hold.wasm"

echo "── Optimising WASM ───────────────────────────────────────────"
stellar contract optimize --wasm "$WASM"
WASM_OPT="${WASM%.wasm}.optimized.wasm"

echo "── Deploying to $NETWORK ──────────────────────────────────────"
CONTRACT_ID=$(stellar contract deploy \
  --wasm "$WASM_OPT" \
  --source "$DEPLOYER_ALIAS" \
  --network "$NETWORK")

echo "Contract ID: $CONTRACT_ID"

echo "── Initialising contract ─────────────────────────────────────"
AUTHORITY_ADDRESS=$(stellar keys address beshield-authority)

stellar contract invoke \
  --id "$CONTRACT_ID" \
  --source "$DEPLOYER_ALIAS" \
  --network "$NETWORK" \
  -- initialize \
  --authority "$AUTHORITY_ADDRESS"

echo ""
echo "✓ Deployed and initialised"
echo "  CONTRACT_ID=$CONTRACT_ID"
echo "  Add to .env.local: HOLD_CONTRACT_ID=$CONTRACT_ID"
echo "  Explorer: https://stellar.expert/explorer/testnet/contract/$CONTRACT_ID"
