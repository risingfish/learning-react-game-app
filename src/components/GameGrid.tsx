import React from 'react';
import Game from "../interfaces/Game";
import useGames from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {

    const { games, error, isLoading }: {games: Game[], error: string, isLoading: boolean } = useGames()
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                {games.map(game => (<GameCard key={game.id} game={game}></GameCard>))}
            </SimpleGrid>
        </>
    )

}

export default GameGrid;