import {CounterData} from "@domain/Counter.ts";

export default interface CounterGateway {
    getCounter(id: number): Promise<CounterData>;
    setCounter(id: number, count: number): Promise<CounterData>;
}