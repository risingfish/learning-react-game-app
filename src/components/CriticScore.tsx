// @flow
import * as React from "react";
import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
    score: number;
}

export const CriticScore = ({ score }: CriticScoreProps) => {
    let color: string = "red";
    if (score > 75) color = "green";
    if (score <= 75 && score > 60) color = "yellow";

    return (
        <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            colorScheme={color}
        >
            {score}
        </Badge>
    );
};
