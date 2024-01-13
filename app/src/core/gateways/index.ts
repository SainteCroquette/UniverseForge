import Gateways from "@core/gateways/Gateways.ts";
import CounterGatewayApi from "@gateways/CounterGatewayApi.ts";

const gateways: Gateways = {
    counterGateway: new CounterGatewayApi(),
}

export default gateways;