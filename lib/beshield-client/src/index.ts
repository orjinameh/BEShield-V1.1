import { Buffer } from "buffer";
import { Address } from "@stellar/stellar-sdk";
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  MethodOptions,
  Result,
  Spec as ContractSpec,
} from "@stellar/stellar-sdk/contract";
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Timepoint,
  Duration,
} from "@stellar/stellar-sdk/contract";
export * from "@stellar/stellar-sdk";
export * as contract from "@stellar/stellar-sdk/contract";
export * as rpc from "@stellar/stellar-sdk/rpc";

if (typeof window !== "undefined") {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CDKFUO3GLVKOTDNUHKWACQGSTMIDFVM7NQNLNHDZ3BWZJLLBKLIO57HV",
  }
} as const

export type DataKey = {tag: "Hold", values: readonly [string]} | {tag: "Authority", values: void};


export interface HoldRecord {
  amount: i128;
  asset: string;
  created_at: u64;
  expires_at: u64;
  hold_id: string;
  payer: string;
  recipient: string;
  status: HoldStatus;
}

export type HoldStatus = {tag: "Pending", values: void} | {tag: "Released", values: void} | {tag: "Returned", values: void} | {tag: "TimedOut", values: void};

export interface Client {
  /**
   * Construct and simulate a lock transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Payer locks USDC before the payment is approved.
   * BEShield intercepts the email request and instructs the payer
   * to call this function instead of sending directly.
   * 
   * hold_id: unique identifier tied to the email conversation (UUID)
   */
  lock: ({hold_id, payer, recipient, asset, amount}: {hold_id: string, payer: string, recipient: string, asset: string, amount: i128}, options?: MethodOptions) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_hold transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Read a hold record — for the BEShield dashboard and audit trail.
   */
  get_hold: ({hold_id}: {hold_id: string}, options?: MethodOptions) => Promise<AssembledTransaction<HoldRecord>>

  /**
   * Construct and simulate a initialize transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Called once at deployment. Sets the BEShield authority keypair.
   * Only this address may submit verdicts.
   */
  initialize: ({authority}: {authority: string}, options?: MethodOptions) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a claim_timeout transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Anyone can call this after 24 hours to auto-return funds.
   * Protects payers if BEShield goes offline.
   */
  claim_timeout: ({hold_id}: {hold_id: string}, options?: MethodOptions) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_authority transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Returns the registered authority address.
   */
  get_authority: (options?: MethodOptions) => Promise<AssembledTransaction<string>>

  /**
   * Construct and simulate a submit_verdict transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * BEShield server submits consensus verdict after BFT evaluation.
   * verdict: true = CLEAR (release to recipient), false = FLAG (return to payer)
   */
  submit_verdict: ({hold_id, verdict}: {hold_id: string, verdict: boolean}, options?: MethodOptions) => Promise<AssembledTransaction<null>>

}
export class Client extends ContractClient {
  static async deploy<T = Client>(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options: MethodOptions &
      Omit<ContractClientOptions, "contractId"> & {
        /** The hash of the Wasm blob, which must already be installed on-chain. */
        wasmHash: Buffer | string;
        /** Salt used to generate the contract's ID. Passed through to {@link Operation.createCustomContract}. Default: random. */
        salt?: Buffer | Uint8Array;
        /** The format used to decode `wasmHash`, if it's provided as a string. */
        format?: "hex" | "base64";
      }
  ): Promise<AssembledTransaction<T>> {
    return ContractClient.deploy(null, options)
  }
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAAAAAONQYXllciBsb2NrcyBVU0RDIGJlZm9yZSB0aGUgcGF5bWVudCBpcyBhcHByb3ZlZC4KQkVTaGllbGQgaW50ZXJjZXB0cyB0aGUgZW1haWwgcmVxdWVzdCBhbmQgaW5zdHJ1Y3RzIHRoZSBwYXllcgp0byBjYWxsIHRoaXMgZnVuY3Rpb24gaW5zdGVhZCBvZiBzZW5kaW5nIGRpcmVjdGx5LgoKaG9sZF9pZDogdW5pcXVlIGlkZW50aWZpZXIgdGllZCB0byB0aGUgZW1haWwgY29udmVyc2F0aW9uIChVVUlEKQAAAAAEbG9jawAAAAUAAAAAAAAAB2hvbGRfaWQAAAAAEAAAAAAAAAAFcGF5ZXIAAAAAAAATAAAAAAAAAAlyZWNpcGllbnQAAAAAAAATAAAAAAAAAAVhc3NldAAAAAAAABMAAAAAAAAABmFtb3VudAAAAAAACwAAAAA=",
        "AAAAAAAAAEJSZWFkIGEgaG9sZCByZWNvcmQg4oCUIGZvciB0aGUgQkVTaGllbGQgZGFzaGJvYXJkIGFuZCBhdWRpdCB0cmFpbC4AAAAAAAhnZXRfaG9sZAAAAAEAAAAAAAAAB2hvbGRfaWQAAAAAEAAAAAEAAAfQAAAACkhvbGRSZWNvcmQAAA==",
        "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAAAgAAAAEAAAAAAAAABEhvbGQAAAABAAAAEAAAAAAAAAAAAAAACUF1dGhvcml0eQAAAA==",
        "AAAAAAAAAGZDYWxsZWQgb25jZSBhdCBkZXBsb3ltZW50LiBTZXRzIHRoZSBCRVNoaWVsZCBhdXRob3JpdHkga2V5cGFpci4KT25seSB0aGlzIGFkZHJlc3MgbWF5IHN1Ym1pdCB2ZXJkaWN0cy4AAAAAAAppbml0aWFsaXplAAAAAAABAAAAAAAAAAlhdXRob3JpdHkAAAAAAAATAAAAAA==",
        "AAAAAQAAAAAAAAAAAAAACkhvbGRSZWNvcmQAAAAAAAgAAAAAAAAABmFtb3VudAAAAAAACwAAAAAAAAAFYXNzZXQAAAAAAAATAAAAAAAAAApjcmVhdGVkX2F0AAAAAAAGAAAAAAAAAApleHBpcmVzX2F0AAAAAAAGAAAAAAAAAAdob2xkX2lkAAAAABAAAAAAAAAABXBheWVyAAAAAAAAEwAAAAAAAAAJcmVjaXBpZW50AAAAAAAAEwAAAAAAAAAGc3RhdHVzAAAAAAfQAAAACkhvbGRTdGF0dXMAAA==",
        "AAAAAgAAAAAAAAAAAAAACkhvbGRTdGF0dXMAAAAAAAQAAAAAAAAAAAAAAAdQZW5kaW5nAAAAAAAAAAAAAAAACFJlbGVhc2VkAAAAAAAAAAAAAAAIUmV0dXJuZWQAAAAAAAAAAAAAAAhUaW1lZE91dA==",
        "AAAAAAAAAGNBbnlvbmUgY2FuIGNhbGwgdGhpcyBhZnRlciAyNCBob3VycyB0byBhdXRvLXJldHVybiBmdW5kcy4KUHJvdGVjdHMgcGF5ZXJzIGlmIEJFU2hpZWxkIGdvZXMgb2ZmbGluZS4AAAAADWNsYWltX3RpbWVvdXQAAAAAAAABAAAAAAAAAAdob2xkX2lkAAAAABAAAAAA",
        "AAAAAAAAAClSZXR1cm5zIHRoZSByZWdpc3RlcmVkIGF1dGhvcml0eSBhZGRyZXNzLgAAAAAAAA1nZXRfYXV0aG9yaXR5AAAAAAAAAAAAAAEAAAAT",
        "AAAAAAAAAIxCRVNoaWVsZCBzZXJ2ZXIgc3VibWl0cyBjb25zZW5zdXMgdmVyZGljdCBhZnRlciBCRlQgZXZhbHVhdGlvbi4KdmVyZGljdDogdHJ1ZSA9IENMRUFSIChyZWxlYXNlIHRvIHJlY2lwaWVudCksIGZhbHNlID0gRkxBRyAocmV0dXJuIHRvIHBheWVyKQAAAA5zdWJtaXRfdmVyZGljdAAAAAAAAgAAAAAAAAAHaG9sZF9pZAAAAAAQAAAAAAAAAAd2ZXJkaWN0AAAAAAEAAAAA" ]),
      options
    )
  }
  public readonly fromJSON = {
    lock: this.txFromJSON<null>,
        get_hold: this.txFromJSON<HoldRecord>,
        initialize: this.txFromJSON<null>,
        claim_timeout: this.txFromJSON<null>,
        get_authority: this.txFromJSON<string>,
        submit_verdict: this.txFromJSON<null>
  }
}