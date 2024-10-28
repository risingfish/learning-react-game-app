import React from 'react';
import Game from "../interfaces/Game";
import useGames from "../hooks/useGames";

const GameGrid = () => {

    const { games, error }: {games: Game[], error: string } = useGames()
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