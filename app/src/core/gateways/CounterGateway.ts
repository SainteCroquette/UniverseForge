interface CounterGateway {
    getCounter(id: number): Promise<{ id: number; count: number }>;
    setCounter(id: number, count: number): Promise<void>;
}

class CounterGatewayImpl implements CounterGateway {
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
        await fetch(`http://localhost:3000/counter/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count }),
        });
    }
}
