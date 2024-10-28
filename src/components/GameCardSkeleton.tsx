import React from 'react';
import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card borderRadius={10} overflow="hidden"  width="300px">
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameCardSkeleton;