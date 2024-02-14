export default interface ErrorGateway {
    badRequest(): Promise<void>;
}
