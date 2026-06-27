import { Barretenberg, UltraHonkBackend } from '@aztec/bb.js';
import { Noir } from '@noir-lang/noir_js';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';

const circuit = JSON.parse(readFileSync('./target/bft_consensus.json', 'utf8'));

const nodeScores = [85, 78, 82, 80, 88];
const threshold = 50;
const verdict = 1;

const emailHash = Array.from(
  createHash('sha256').update('demo@vendor.com invoice #4821').digest()
);

const inputs = {
  node_scores: nodeScores.map(s => s.toString()),
  threshold: threshold.toString(),
  verdict: verdict.toString(),
  email_hash: emailHash.map(b => b.toString()),
};

console.log('Initializing Barretenberg...');
const bb = await Barretenberg.new();

console.log('Initializing Noir...');
const noir = new Noir(circuit);

console.log('Generating witness...');
const { witness } = await noir.execute(inputs);

console.log('Generating ZK proof (30-60 seconds)...');
const backend = new UltraHonkBackend(circuit.bytecode, bb);
const proof = await backend.generateProof(witness);

console.log('Verifying proof...');
const valid = await backend.verifyProof(proof);

console.log('\n✓ Proof valid:', valid);
console.log('Proof size:', proof.proof.length, 'bytes');

const proofHash = createHash('sha256')
  .update(Buffer.from(proof.proof))
  .digest('hex');

console.log('Proof hash:', proofHash);

await bb.destroy();
