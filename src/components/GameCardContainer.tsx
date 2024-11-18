import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface GameCardContainerProps {
    children: ReactNode,
}

function GameCardContainer({children, cardKey}: GameCardContainerProps) {
    return (
        <Box borderRadius={10} overflow="hidden" key={cardKey}>
            {children}
        </Box>
    );
}

export default GameCardContainer;
