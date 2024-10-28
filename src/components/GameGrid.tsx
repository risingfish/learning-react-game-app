import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import apiClient from '../services/api-clients'

interface Game {
    id: number;
    name: string;
}

interface GamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames]: [games: Game[], setGames: Dispatch<SetStateAction<Game[]>>] = useState<Game[]>([]);
    const [error, setError]: [error: string, setError: Dispatch<SetStateAction<string>>] = useState<string>('');

    useEffect(() => {
        apiClient.get<GamesResponse>('/games')
            .then(res => {
                setGames(res.data.results)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    }, [])

    return (
        <>
            {error && <div>{error}</div>}
            <ul>
                {games.map(game => (<li key={game.id}>{game.name}</li>))}
            </ul>
        </>
    )

}

export default GameGrid;