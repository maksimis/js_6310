import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
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