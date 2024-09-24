import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Time = bigint;
export interface Visit { 'timestamp' : Time, 'userAgent' : string }
export interface _SERVICE {
  'getTotalVisits' : ActorMethod<[], bigint>,
  'getVisits' : ActorMethod<[], Array<Visit>>,
  'logVisit' : ActorMethod<[string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
