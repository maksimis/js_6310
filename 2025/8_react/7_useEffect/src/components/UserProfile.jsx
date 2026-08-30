import React from 'react';
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Эффект для загрузки данных
    useEffect(() => {
        if (!userId) return;
        
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError('Ошибка загрузки пользователя');
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
    }, [userId]); // Зависимость - эффект выполнится при изменении userId
    
    // Эффект для заголовка страницы
    useEffect(() => {
        if (user) {
            document.title = `Профиль: ${user.name}`;
        }
        
        // Функция очистки
        return () => {
            document.title = 'Мое приложение';
        };
    }, [user]);
    
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!user) return <div>Пользователь не найден</div>;
    
    return (
        <div className="user-profile">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Город: {user.city}</p>
        </div>
    );
}

export default UserProfile;