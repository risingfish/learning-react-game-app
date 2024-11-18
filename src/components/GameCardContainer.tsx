import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface GameCardContainerProps {
    children: ReactNode,
    key?: number
}

function GameCardContainer({children, key}: GameCardContainerProps) {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
}

export default GameCardContainer;
