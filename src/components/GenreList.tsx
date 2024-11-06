import React from 'react';
import useGenres from "../hooks/useGenres";
import Genre from "../interfaces/Genre";
import {HStack, List, ListItem, Image, Text, Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({onSelectGenre, selectedGenre}: Props) {

    const {data, isLoading, error}: {data: Genre[], isLoading: boolean, error: string} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;