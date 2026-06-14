#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, Symbol, symbol_short};

const PENDING: Symbol = symbol_short!("PENDING");
const APPROVED: Symbol = symbol_short!("APPROVE");
const REJECTED: Symbol = symbol_short!("REJECT");

#[contract]
pub struct BEShieldEscrow;

#[contractimpl]
impl BEShieldEscrow {
    // 1. Initialize the escrow
    pub fn init(env: Env, oracle: Address, amount: i128, recipient: Address) {
        env.storage().instance().set(&symbol_short!("oracle"), &oracle);
        env.storage().instance().set(&symbol_short!("amount"), &amount);
        env.storage().instance().set(&symbol_short!("recipient"), &recipient);
        env.storage().instance().set(&symbol_short!("status"), &PENDING);
    }

    // 2. The AI Hook
    pub fn set_verdict(env: Env, caller: Address, is_safe: bool) {
        // Require cryptographic signature from whoever called this
        caller.require_auth(); 
        
        // Fetch the authorized Oracle address from storage
        let oracle: Address = env.storage().instance().get(&symbol_short!("oracle")).unwrap();
        
        // Ensure ONLY BEShield can make this decision
        if caller != oracle {
            panic!("Unauthorized: Only the BEShield Oracle can set the verdict");
        }

        // Update the contract state based on the AI's decision
        if is_safe {
            env.storage().instance().set(&symbol_short!("status"), &APPROVED);
            // Future step: add token transfer logic here to release funds
        } else {
            env.storage().instance().set(&symbol_short!("status"), &REJECTED);
            // Future step: add token transfer logic here to return funds to sender
        }
    }
}