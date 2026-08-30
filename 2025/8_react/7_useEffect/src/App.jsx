import UserCard from './components/UserCard';
import './App.css'
import React from 'react';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
    const user = {
        name: "Анна Петрова",
        age: 22,
        email: "anna@example.com"
    };
    return (<div>
        <UserProfile userId={1} />
        <Counter/>
        <UserCard
            name={user.name}
            age={user.age}
            email={user.email}
            isOnline={true}
        />
    </div>);
}

export default App
