import React from 'react';

function Welcome() {
    const name = "Студент";    
    return (
        <div className="welcome">
            <h1>Привет, {name}!</h1>
            <p>Добро пожаловать в изучение React</p>
            <button onClick={() => alert('Кнопка нажата!')}>
                Нажми меня
            </button>
        </div>
    );
}

export default Welcome;