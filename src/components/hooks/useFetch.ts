import { useState, useEffect, useDeferredValue } from 'react';

export const useFetch = <T>(url: string): { data: T, isError: boolean, isLoading: boolean } => {
    const [data, setData] = useState<T>({} as T);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    console.log("isLoading", isLoading)
    return { data, isError, isLoading };
}