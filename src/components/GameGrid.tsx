import React from "react";
import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import GameQuery from "../interfaces/GameQuery";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error}</Text>

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6}>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;
