import React from "react";

function UserCard({ name, age, email, isOnline = false }) {
    return (
        <div className={`user-card ${isOnline ? 'online' : 'offline'}`}>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
            <p>Email: {email}</p>
            <div>{isOnline ? '🟢 Online' : '🔴 Offline'}</div>
        </div>);
}

export default UserCard;