import Game from "../interfaces/Game";
import useData from "./useData";
import Genre from "../interfaces/Genre";
import Platform from "../interfaces/Platform";

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );

export default useGames;
