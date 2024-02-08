import CounterGateway from '@core/gateways/CounterGateway.ts';

import ApiService from '@services/api/ApiService.ts';

import { CounterData } from '@domain/Counter.ts';

import ApiGateway from "./ApiGateway.ts";

export default class CounterGatewayApi extends ApiGateway implements CounterGateway{
    constructor(api: ApiService) {
        super(api);
    }

    async getCounter(id: number): Promise<CounterData> {
        return this.api.get<CounterData>(`http://localhost:3000/counter/${id}`);
    }

    async setCounter(id: number, count: number): Promise<CounterData> {
        return this.api.patch<CounterData>(`http://localhost:3000/counter/${id}`, { count });
    }
}
