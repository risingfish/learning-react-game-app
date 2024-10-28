import React from 'react';
import {Card, CardBody, Heading, Image, Text} from '@chakra-ui/react'
import Game from "../interfaces/Game";
import ParentPlatform from "../interfaces/ParentPlatform";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
    game: Game
    parent_platforms: ParentPlatform[]
}

function GameCard({ game }: GameCardProps) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl' textAlign='left'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    );
}

export default GameCard;