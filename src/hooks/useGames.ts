import Game from "../interfaces/Game";
import useData from "./useData";
import Genre from "../interfaces/Genre";
import Platform from "../interfaces/Platform";
import GameQuery from "../interfaces/GameQuery";

const useGames = (
    gameQuery: GameQuery
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery?.genre?.id,
                parent_platforms: gameQuery?.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        },
        [gameQuery]
    );

export default useGames;
