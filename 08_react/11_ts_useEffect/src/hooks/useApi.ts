import { useEffect, useState } from 'react';

// Кастомный хук для GET-запросов
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
    // смена reloadKey перезапускает эффект — так устроен refetch
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch(url, { signal: controller.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // тип T только объявлен, форму ответа TypeScript не проверяет
                return response.json() as Promise<T>;
            })
            .then(setData)
            .catch(err => {
                if (!controller.signal.aborted) {
                    setError(err instanceof Error ? err.message : 'Unknown error');
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, [url, reloadKey]);

    return { data, loading, error, refetch: () => setReloadKey(k => k + 1) };
}
