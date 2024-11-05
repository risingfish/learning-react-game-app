import React from 'react';
import useGenres from "../hooks/useGenres";
import Genre from "../interfaces/Genre";
import {HStack, List, ListItem, Image, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {

    const {data}: {data: Genre[]} = useGenres();

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