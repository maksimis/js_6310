import { useEffect, useState } from "react";

// Хук для API запросов
interface UseApiResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useApi<T>(url: string): UseApiResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result: T = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [url]);
    
    return { data, loading, error, refetch: fetchData };
}

// Использование кастомных хуков
interface Settings {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
}

// function UserSettings() {
//     const [settings, setSettings] = useLocalStorage<Settings>('user-settings', {
//         theme: 'light',
//         language: 'ru',
//         notifications: true
//     });
    
//     const { data: user, loading, error } = useApi<User>('/api/user/1');
    
//     // ... компонент
// }

