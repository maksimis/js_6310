import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Эффект загрузки данных: перезапускается при изменении userId
    useEffect(() => {
        if (!userId) return;

        let ignore = false; // ответ для устаревшего userId не записываем

        const fetchUser = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                // fetch НЕ бросает ошибку на 404/500 — проверяем статус сами
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const userData = await response.json();
                if (!ignore) setUser(userData);
            } catch (err) {
                if (!ignore) setError(`Ошибка загрузки пользователя: ${err.message}`);
            } finally {
                if (!ignore) setLoading(false);
            }
        };

        fetchUser();

        return () => {
            ignore = true;
        };
    }, [userId]);

    // Эффект для заголовка вкладки + очистка
    useEffect(() => {
        if (user) {
            document.title = `Профиль: ${user.name}`;
        }

        return () => {
            document.title = 'Мое приложение';
        };
    }, [user]);

    if (!userId) return <div>Пользователь не выбран</div>;
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    if (!user) return null;

    return (
        <div className="user-profile">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Город: {user.address?.city}</p>
        </div>
    );
}

export default UserProfile;
