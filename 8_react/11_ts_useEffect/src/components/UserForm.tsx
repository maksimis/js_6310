import { useState, type ChangeEvent, type FormEvent } from 'react';

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    role: 'admin' | 'user' | 'moderator';
}

export function UserForm() {
    // Типизация состояния с примитивами
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    
    // Типизация состояния с объектами
    const [user, setUser] = useState<User | null>(null);
    
    // Типизация состояния с массивом
    const [users, setUsers] = useState<User[]>([]);
    
    // Union type для ограничения значений
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    
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
            id: Date.now(),
            name,
            age,
            email: `${name.toLowerCase()}@example.com`,
            role: 'user'
        };
        
        setUsers(prev => [...prev, newUser]);
        setName('');
        setAge(0);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Имя пользователя"
            />
            <input 
                type="number"
                value={age}
                onChange={handleAgeChange}
                placeholder="Возраст"
            />
            <button type="submit">Добавить пользователя</button>
            {users.map(us => <div><span>{us.name}</span> <span>{us.age}</span></div>
            )}
        </form>
    );
}


