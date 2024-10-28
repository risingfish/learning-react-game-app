import {Dispatch, SetStateAction, useEffect, useState} from "react";
import apiClient from "../services/api-clients";
import Game from "../interfaces/Game";
import {AxiosResponse, CanceledError} from "axios";

interface GamesResponse {
    count: number;
    results: Game[];
    isLoading: boolean;
}

const useGames = () => {
    const [games, setGames]: [games: Game[], setGames: Dispatch<SetStateAction<Game[]>>] = useState<Game[]>([]);
    const [error, setError]: [error: string, setError: Dispatch<SetStateAction<string>>] = useState<string>('');
    const [isLoading, setIsLoading]: [error: boolean, setError: Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<GamesResponse>('/games', {signal: controller.signal})
            .then((res: AxiosResponse): void => {
                setGames(res.data.results);
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

    return {games, error, isLoading}
}

export default useGames;