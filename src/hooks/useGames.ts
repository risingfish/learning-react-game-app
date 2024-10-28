import {Dispatch, SetStateAction, useEffect, useState} from "react";
import apiClient from "../services/api-clients";
import Game from "../interfaces/Game";
import {AxiosResponse, CanceledError} from "axios";

interface GamesResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    const [games, setGames]: [games: Game[], setGames: Dispatch<SetStateAction<Game[]>>] = useState<Game[]>([]);
    const [error, setError]: [error: string, setError: Dispatch<SetStateAction<string>>] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<GamesResponse>('/games', {signal: controller.signal})
            .then((res: AxiosResponse): void => {
                setGames(res.data.results);
                setError('');
            })
            .catch((error): void => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            });

        return () => controller.abort();
    }, []);

    return {games, error}
}

export default useGames;