// BEShield BFT Consensus Circuit
// ================================
// Proves that a BEC email verdict was computed correctly
// from 5 independent AI node scores using Byzantine Fault
// Tolerant consensus — WITHOUT revealing the scores or
// email content on-chain.
//
// Public inputs  (visible on Stellar ledger):
//   - email_hash  : SHA-256 hash of the email being analysed
//   - verdict     : 1 = PASS, 0 = FRAUD/REVIEW
//   - threshold   : minimum score for a node to "pass" (e.g. 50)
//
// Private inputs (never leave the prover's machine):
//   - node_scores : the 5 AI node confidence scores (0–100)
//
// The circuit proves:
//   IF verdict == 1 THEN at least 4 of 5 nodes scored >= threshold
//   IF verdict == 0 THEN fewer than 4 nodes scored >= threshold
//
// This is the BFT condition: n >= 3f + 1 → f = 1 → need 4/5 to pass

fn main(
    // Private: AI node scores (0–100 scale)
    node_scores: [u64; 5],

    // Public: minimum score for a node to vote "pass"
    threshold: pub u64,

    // Public: final BFT verdict (1 = PASS, 0 = FRAUD/REVIEW)
    verdict: pub u64,

    // Public: SHA-256 hash of the email (binds proof to specific email)
    // Represented as 32 bytes
    email_hash: pub [u8; 32]
) {
    // Count how many nodes voted to pass
    let mut passing_nodes: u64 = 0;

    for i in 0..5 {
        // Each node passes if its score meets or exceeds threshold
        if node_scores[i] >= threshold {
            passing_nodes = passing_nodes + 1;
        }
    }

    // BFT condition: n=5, f=1, need n-f = 4 nodes to agree
    // Enforce that the public verdict matches the computed result
    if verdict == 1 {
        // Claimed PASS: prove at least 4/5 nodes passed
        assert(passing_nodes >= 4);
    } else {
        // Claimed FRAUD/REVIEW: prove fewer than 4 nodes passed
        assert(passing_nodes < 4);
    }

    // The email_hash is referenced so the proof is bound to
    // a specific email — prevents proof reuse across emails
    // (Noir requires all inputs to be constrained)
    let _ = email_hash;
}

// ── Test cases ───────────────────────────────────────────────

#[test]
fn test_clear_pass() {
    // All 5 nodes pass with high scores
    main(
        [90, 85, 88, 92, 87],   // node_scores (private)
        50,                      // threshold (public)
        1,                       // verdict: PASS (public)
        [0; 32]                  // email_hash placeholder
    );
}

#[test]
fn test_clear_fraud() {
    // Only 2 nodes pass — BEC attack scenario
    main(
        [15, 20, 88, 12, 85],   // domain fake, urgency, bank fake, amount ok
        50,
        0,                       // verdict: FRAUD
        [0; 32]
    );
}

#[test]
fn test_bft_boundary() {
    // Exactly 4/5 nodes pass — minimum for PASS
    main(
        [80, 75, 82, 78, 20],   // 4 pass, 1 fails
        50,
        1,                       // still PASS — BFT holds
        [0; 32]
    );
}

#[test]
fn test_review_case() {
    // Exactly 3/5 nodes pass — falls below BFT threshold
    main(
        [80, 75, 20, 22, 82],   // 3 pass, 2 fail
        50,
        0,                       // REVIEW/FRAUD
        [0; 32]
    );
}
