import React from 'react';
import useGames from "../hooks/useGames";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {

    const { data, error, isLoading } = useGames()
    const skeletons = [1,2,3,4,5,6];

    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={3}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
                {data.map(game => (<GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>))}
            </SimpleGrid>
        </>
    )

}

export default GameGrid;