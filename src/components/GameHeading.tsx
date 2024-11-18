import GameQuery from "../interfaces/GameQuery";
import {Heading} from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
    const heading = [];
    if (gameQuery?.platform?.name) heading.push(gameQuery.platform.name);
    if (gameQuery?.genre?.name) heading.push(gameQuery.genre.name);
    heading.push('Games');

    return (
        <Heading as='h1' placement='left' pb="3">{heading.join(' ')}</Heading>
    );
}

export default GameHeading;