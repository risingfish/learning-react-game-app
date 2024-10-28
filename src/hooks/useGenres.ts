import {Dispatch, SetStateAction, useEffect, useState} from "react";
import apiClient from "../services/api-clients";
import {AxiosResponse, CanceledError} from "axios";
import Genre from "../interfaces/Genre";

interface GenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres]: [games: Genre[], setGames: Dispatch<SetStateAction<Genre[]>>] = useState<Genre[]>([]);
    const [error, setError]: [error: string, setError: Dispatch<SetStateAction<string>>] = useState<string>('');
    const [isLoading, setIsLoading]: [error: boolean, setError: Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<GenreResponse>('/genres', {signal: controller.signal})
            .then((res: AxiosResponse): void => {
                setGenres(res.data.results);
                setError('');
                setIsLoading(false);
            })
            .catch((error): void => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading}
};

export default useGenres;