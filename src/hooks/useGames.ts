import Game from "../interfaces/Game";
import useData from "./useData";
import Genre from "../interfaces/Genre";

const useGames = (selectedGenre: Genre | null) =>
    useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
        selectedGenre?.id,
    ]);

export default useGames;
