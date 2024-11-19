import genres from "../data/genres"

const useGenres = () => ({data: genres, isLoading: false, error: ''})

export default useGenres;
