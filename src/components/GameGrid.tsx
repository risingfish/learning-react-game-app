import React from 'react';
import Game from "../interfaces/Game";
import useGames from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {

    const { games, error }: {games: Game[], error: string } = useGames()
    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                {games.map(game => (<GameCard key={game.id} game={game}></GameCard>))}
            </SimpleGrid>
        </>
    )

}

export default GameGrid;