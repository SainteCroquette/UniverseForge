import Gateways from "@core/gateways/Gateways.ts";

import CounterGatewayApi from "@/adapters/secondary/gateways/CounterGatewayApi.ts";

import ApiService from "@services/api/ApiService.ts";

const api = new ApiService();

const gateways: Gateways = {
    counterGateway: new CounterGatewayApi(api),
}

export default gateways;