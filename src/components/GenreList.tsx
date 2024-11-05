import React from 'react';
import useGenres from "../hooks/useGenres";
import Genre from "../interfaces/Genre";
import {HStack, List, ListItem, Image, Text, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {

    const {data, isLoading, error}: {data: Genre[], isLoading: boolean, error: string} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;