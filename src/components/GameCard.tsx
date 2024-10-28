import React from 'react';
import {Card, CardBody, Heading, HStack, Image, Text} from '@chakra-ui/react'
import Game from "../interfaces/Game";
import ParentPlatform from "../interfaces/ParentPlatform";
import PlatformIconList from "./PlatformIconList";
import {CriticScore} from "./CriticScore";

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
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;