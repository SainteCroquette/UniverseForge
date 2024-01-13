import Gateways from "@core/gateways/Gateways.ts";
import {createQueryFunctionWrapper, createMutationFunctionWrapper} from "@core/queries";

export const getCounter = createQueryFunctionWrapper(async (gateways: Gateways) => {
    return gateways.counterGateway.getCounter(1);
});

export const updateCounter = createMutationFunctionWrapper(async (count: number, gateways: Gateways): Promise<number> => {
    await gateways.counterGateway.setCounter(1, count);
    return count;
});