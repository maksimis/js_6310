import { useState, type ChangeEvent, type FormEvent } from 'react';

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    role: 'admin' | 'user' | 'moderator'; // union-тип ограничивает значения
    isActive: boolean;
}

export function UserForm() {
    // Примитивы: тип выводится из начального значения
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // Объект или null: тип указываем явно
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    // Массив объектов
    const [users, setUsers] = useState<User[]>([]);

    // Обработчики с типизацией событий
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            age,
            email: `${name.toLowerCase()}@example.com`,
            role: 'user',
            isActive,
        };

        setUsers(prev => [...prev, newUser]);
        setName('');
        setAge(0);
        setIsActive(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" value={name} onChange={handleNameChange} />

            <label htmlFor="age">Возраст</label>
            <input id="age" type="number" value={age} onChange={handleAgeChange} />

            <label>
                <input type="checkbox" checked={isActive} onChange={e => setIsActive(e.target.checked)} />
                Активен
            </label>

            <button type="submit" disabled={!name}>Добавить пользователя</button>

            <ul>
                {users.map(user => (
                    // key — стабильный id элемента, а не индекс массива
                    <li key={user.id}>
                        <button type="button" onClick={() => setSelectedUser(user)}>{user.name}</button>
                        {' '}{user.age} {user.isActive ? '🟢' : '⚪'}
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <p>Выбран: {selectedUser.name}, {selectedUser.email}, роль: {selectedUser.role}</p>
            )}
        </form>
    );
}
