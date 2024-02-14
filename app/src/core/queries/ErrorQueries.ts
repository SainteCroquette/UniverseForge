import { UseQueryOptions } from '@tanstack/react-query';
import { createQueryFunctionWrapper } from '@core/queries/utils/wrappers.ts';
import Gateways from '@core/gateways/Gateways.ts';

export const ERROR_QUERY_KEY = ['error-req'];

export const getError: UseQueryOptions<void> = {
    queryKey: ERROR_QUERY_KEY,
    queryFn: createQueryFunctionWrapper(async (gateways: Gateways): Promise<void> => {
        return gateways.errorGateway.badRequest();
    }),
};
