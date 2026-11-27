import UserCard from './components/UserCard';
import './App.css'

const users = [
    { id: 1, name: "Анна Петрова", age: 22, email: "anna@example.com", isOnline: true },
    { id: 2, name: "Борис Иванов", age: 25, email: "boris@example.com" },
];

function App() {
    return (
        <div>
            {/* Один компонент — props передаём явно */}
            <UserCard name="Вера Смирнова" age={30} email="vera@example.com" isOnline />

            {/* Список: map + key. key — стабильный уникальный id, а не индекс массива */}
            {users.map(user => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    email={user.email}
                    isOnline={user.isOnline}
                />
            ))}
        </div>
    );
}

export default App
