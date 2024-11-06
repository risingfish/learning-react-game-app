import useData from "./useData";
import Platform from "../interfaces/Platform";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
