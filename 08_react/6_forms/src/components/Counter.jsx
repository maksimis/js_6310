import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    const increment = () => {
        setCount(prev => prev + 1); // новое значение считаем из предыдущего
    };
    
    const decrement = () => {
        setCount(prev => prev - 1);
    };
    
    const reset = () => {
        setCount(0);
    };
    
    return (
        <div className="counter">
            <h2>Счетчик: {count}</h2>
            <input 
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Привет, {name || 'незнакомец'}!</p>
            <div className="buttons">
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Сброс</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Counter;
