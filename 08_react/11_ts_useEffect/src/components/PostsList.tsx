import { useEffect, useState } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Status = 'loading' | 'success' | 'error';

// response.json() возвращает any: форму данных проверяем сами (type guard из темы 7)
function isPost(value: unknown): value is Post {
    return typeof value === 'object' && value !== null
        && typeof (value as Post).id === 'number'
        && typeof (value as Post).title === 'string'
        && typeof (value as Post).body === 'string';
}

export function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [status, setStatus] = useState<Status>('loading');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // при размонтировании отменяем запрос
        const controller = new AbortController();

        const fetchPosts = async (): Promise<void> => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?_limit=5',
                    { signal: controller.signal },
                );

                // fetch не бросает ошибку на 404/500 — проверяем статус сами
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: unknown = await response.json();

                if (!Array.isArray(data) || !data.every(isPost)) {
                    throw new Error('Неожиданный формат ответа');
                }

                setPosts(data);
                setStatus('success');
            } catch (err) {
                if (controller.signal.aborted) return; // отмена — не ошибка
                setError(err instanceof Error ? err.message : 'Unknown error');
                setStatus('error');
            }
        };

        fetchPosts();

        return () => controller.abort();
    }, []);

    if (status === 'loading') return <div>Загрузка постов...</div>;
    if (status === 'error') return <div>Ошибка: {error}</div>;

    return (
        <div>
            <h2>Последние посты</h2>
            {posts.map(post => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    );
}
