import GameQuery from "../interfaces/GameQuery";
import {Flex, Heading} from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
    const heading = [];
    if (gameQuery?.platform?.name) heading.push(gameQuery.platform.name);
    if (gameQuery?.genre?.name) heading.push(gameQuery.genre.name);
    heading.push('Games');

    return (
        <Flex >
            <Heading as='h1' pb="3" fontSize='2xl'>{heading.join(' ')}</Heading>
        </Flex>
    );
}

export default GameHeading;