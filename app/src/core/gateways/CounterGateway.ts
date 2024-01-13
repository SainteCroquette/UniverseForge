export default interface CounterGateway {
    getCounter(id: number): Promise<{ id: number; count: number }>;
    setCounter(id: number, count: number): Promise<void>;
}