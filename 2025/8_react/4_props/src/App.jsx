import UserCard from './components/UserCard';
import './App.css'
import React from 'react';

function App() {
    const user = {
        name: "Анна Петрова",
        age: 22,
        email: "anna@example.com"
    };
    return (<div>
        <UserCard
            name={user.name}
            age={user.age}
            email={user.email}
            isOnline={true}
        />
        <UserCard
            name="Борис Иванов"
            age={25}
            email="boris@example.com"
        />
    </div>);
}

export default App
