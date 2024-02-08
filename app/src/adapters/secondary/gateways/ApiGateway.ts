import ApiService from "@services/api/ApiService.ts";

export default class ApiGateway {
    constructor(
        protected readonly api: ApiService
    ) {
    }
}