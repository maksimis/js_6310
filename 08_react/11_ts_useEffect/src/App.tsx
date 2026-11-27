import './App.css'
import { PostsList } from './components/PostsList';
import { UserForm } from './components/UserForm';
import { useApi } from './hooks/useApi';
import { useLocalStorage } from './hooks/useLocalStorage';

interface User {
    id: number;
    name: string;
    email: string;
}

function App() {
    // значение переживает перезагрузку страницы
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
    const { data: user, loading, error, refetch } = useApi<User>('https://jsonplaceholder.typicode.com/users/1');

    return (
        <div className={`app app--${theme}`}>
            <button onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>
                Тема: {theme}
            </button>

            <section>
                <h2>useApi</h2>
                {loading && <p>Загрузка пользователя...</p>}
                {error && <p>Ошибка: {error}</p>}
                {user && <p>{user.name} ({user.email})</p>}
                <button onClick={refetch}>Обновить</button>
            </section>

            <PostsList />
            <UserForm />
        </div>
    );
}

export default App
