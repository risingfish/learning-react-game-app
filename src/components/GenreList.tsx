import React from 'react';
import useGenres from "../hooks/useGenres";
import Genre from "../interfaces/Genre";

function GenreList() {

    const {data}: {data: Genre[]} = useGenres();

    return (
        <ul>
            {data.map(genre => (<li key={genre.id}>{genre.name}</li>))}
        </ul>
    );
}

export default GenreList;