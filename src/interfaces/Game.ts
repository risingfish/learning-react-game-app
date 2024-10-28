import ParentPlatform from "./ParentPlatform";

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: ParentPlatform }[];
}

export default Game;