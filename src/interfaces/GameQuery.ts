import Genre from "./Genre";
import Platform from "./Platform";

interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

export default GameQuery;