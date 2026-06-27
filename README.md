## Stellar Hacks: Real-World ZK Submission

Live testnet transactions:
- https://stellar.expert/explorer/testnet/tx/13259049374089216
- https://stellar.expert/explorer/testnet/tx/13259770928574464

ZK Circuit: /circuits/bft_consensus/src/main.nr
Research paper: https://zenodo.org/records/20577665

# BEShield: Decentralized Security Oracle for Stellar

**BEShield is a decentralized security oracle that leverages AI to audit email communications and enforce transaction safety for Stellar-based escrow contracts, mitigating phishing risks at the protocol level.**

## 1. Project Overview
BEShield bridges the trust gap between traditional email (Web2) and the Stellar blockchain (Web3). It functions as a specialized Oracle that automatically monitors incoming emails for payment requests and suspicious activity. By utilizing Soroban, BEShield creates an immutable on-chain record of security verdicts, allowing smart contracts to programmatically verify if an email-based interaction is safe before funds are moved.

## 2. The Problem
Users in the Stellar ecosystem are increasingly targeted by sophisticated phishing emails that mimic legitimate job offers or payment requests. Current wallet security is often reactive, failing to catch social engineering attacks that occur *before* the user even interacts with a dApp. There is a lack of automated, trustless validation for these communication channels.

## 3. The Solution & Architecture
BEShield automates the "Trust Check" via a four-step pipeline:
1. **Fetch:** A secure, containerized worker uses IMAP to retrieve unread email headers and bodies (credentials are encrypted at rest using industry-standard AES-256).
2. **Analyze:** The content is processed via a Large Language Model (Groq/Llama) specifically fine-tuned to detect payment intent, urgency, and sender anomalies.
3. **Verify:** The AI's decision (Safe/Unsafe) is sent to our Soroban smart contract as a signed transaction.
4. **On-Chain:** The contract records the verdict immutably, providing a transparent, verifiable security audit for the transaction context.

## 4. Stellar/Soroban Integration
We leverage Soroban to create an immutable data feed. Our contract, `set_verdict`, acts as an Oracle registry. When an email is audited, the verdict is cryptographically linked to the specific client/escrow contract, preventing tampering and providing a "Safety Score" that dApps can rely on.
* **Contract Address:** [PASTE YOUR CONTRACT ID HERE]

## 5. Traction / Proof of Work
We have successfully deployed the Oracle on the Stellar Testnet and validated the end-to-end flow from email detection to blockchain finality.
* **Transaction Hash 1:** https://stellar.expert/explorer/testnet/tx/13259049374089216
* **Transaction Hash 2:** https://stellar.expert/explorer/testnet/tx/13259770928574464

## 6. Roadmap (3 Tranches)

### Tranche 1: MVP (Completed)
- [x] Backend IMAP/AI pipeline built with Node.js/Bun.
- [x] Soroban smart contract logic deployed to Testnet.
- [x] Successful on-chain transaction execution and verification.

### Tranche 2: API & Integration
- [ ] Develop public REST API to allow third-party Stellar dApps to query the BEShield Oracle.
- [ ] Refine AI prompt engineering to reduce latency and improve safety scoring accuracy.
- [ ] Create developer documentation and SDK starter-kit for easy integration.

### Tranche 3: Mainnet Launch
- [ ] Mainnet deployment of Soroban contracts.
- [ ] Frontend user dashboard to manage email-to-escrow bindings securely.
- [ ] Third-party security audit of smart contract codebase.

## 7. Open Source Plan
This project is fully open-source under the MIT License. The code for our smart contracts is available in the `/contracts` directory, and the core backend engine is in the `/backend` directory. We welcome contributions and audits from the Stellar community.
