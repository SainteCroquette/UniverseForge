import Gateways from '@core/gateways/Gateways.ts';

import CounterGatewayApi from '@/adapters/secondary/gateways/CounterGatewayApi.ts';
import ErrorGatewayApi from '@/adapters/secondary/gateways/ErrorGatewayApi.ts';

import ApiService from '@services/api/ApiService.ts';

const api = new ApiService();

const gateways: Gateways = {
    counterGateway: new CounterGatewayApi(api),
    errorGateway: new ErrorGatewayApi(api),
};

export default gateways;
