import CounterGateway from "@core/gateways/CounterGateway.ts";

export default class CounterGatewayApi implements CounterGateway {
    async getCounter(id: number) {
        const response = await fetch(`http://localhost:3000/counter/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    }

    async setCounter(id: number, count: number) {
        const response = await fetch(`http://localhost:3000/counter/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count }),
        });

        return await response.json();
    }
}
