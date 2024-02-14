import ErrorGateway from '@core/gateways/ErrorGateway.ts';

import ApiService from '@services/api/ApiService.ts';

import ApiGateway from './ApiGateway.ts';

export default class ErrorGatewayApi extends ApiGateway implements ErrorGateway {
    constructor(api: ApiService) {
        super(api);
    }

    badRequest(): Promise<void> {
        return this.api.get('http://localhost:3000/errors/400');
    }
}
