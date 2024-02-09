import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

import Gateways from '@core/gateways/Gateways.ts';
import { createQueryFunctionWrapper, createMutationFunctionWrapper } from '@core/queries';

import { CounterData } from '@domain/Counter.ts';

export const QUERY_COUNTER_KEY = ['counter'];

export const getCounter: UseQueryOptions<CounterData> = {
    queryKey: QUERY_COUNTER_KEY,
    queryFn: createQueryFunctionWrapper(async (gateways: Gateways): Promise<CounterData> => {
        return gateways.counterGateway.getCounter(1);
    }),
};

export const updateCounter: UseMutationOptions<CounterData, null, number> = {
    mutationFn: createMutationFunctionWrapper(async (count: number, gateways: Gateways): Promise<CounterData> => {
        return await gateways.counterGateway.setCounter(1, count);
    }),
};
