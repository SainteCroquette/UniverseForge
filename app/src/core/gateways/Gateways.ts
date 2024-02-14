import CounterGateway from './CounterGateway.ts';
import ErrorGateway from './ErrorGateway.ts';

export default interface Gateways {
    counterGateway: CounterGateway;
    errorGateway: ErrorGateway;
}
