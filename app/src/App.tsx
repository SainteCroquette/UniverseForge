import './App.css';
import { useStore } from '@/core/store.ts';

function App() {
    const { count, increment, decrement } = useStore();

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;
