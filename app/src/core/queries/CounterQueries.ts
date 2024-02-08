import Gateways from '@core/gateways/Gateways.ts';
import { createQueryFunctionWrapper, createMutationFunctionWrapper } from '@core/queries';
import { CounterData } from '@domain/Counter.ts';

export const getCounter = createQueryFunctionWrapper(async (gateways: Gateways): Promise<CounterData> => {
    return gateways.counterGateway.getCounter(1);
});

export const updateCounter = createMutationFunctionWrapper(
    async (count: number, gateways: Gateways): Promise<CounterData> => {
        return await gateways.counterGateway.setCounter(1, count);
    },
);
