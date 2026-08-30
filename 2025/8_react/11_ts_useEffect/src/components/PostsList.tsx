import { useState, useEffect } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface ApiError {
    message: string;
    code: number;
}

export function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchPosts = async (): Promise<void> => {
            try {
                setLoading(true);
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data: Post[] = await response.json();
                setPosts(data.slice(0, 5)); // Берем только 5 постов
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);
    
    if (loading) return <div>Загрузка постов...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    
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
