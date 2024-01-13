import {QueryFunctionContext} from "@tanstack/react-query";
import Gateways from "@core/gateways/Gateways.ts";
import gateways from "@core/gateways";

type WrappedQuery<R = unknown> = (context: QueryFunctionContext) => R | Promise<R>;
type QueryCallback<R = unknown> = (gateways: Gateways, context: QueryFunctionContext) => R | Promise<R>;

export function createQueryFunctionWrapper<R>(callback: QueryCallback<R>): WrappedQuery<R> {
    return (context: QueryFunctionContext): R | Promise<R> => {
        return callback(gateways, context);
    };
}

type WrappedMutation<R = unknown, P = unknown> = (param: P) => Promise<R>;
type MutationCallback<R = unknown, P = unknown> = (param: P, gateways: Gateways) => Promise<R>;

export function createMutationFunctionWrapper<R, P>(callback: MutationCallback<R, P>): WrappedMutation<R, P> {
    return (arg: P): Promise<R> => {
        return callback(arg, gateways);
    };
}
