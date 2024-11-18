import {Box, Button, Flex, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import { Dispatch, SetStateAction, useState } from "react";
import GenreList from "./components/GenreList";
import Genre from "./interfaces/Genre";
import PlatformSelector from "./components/PlatformSelector";
import Platform from "./interfaces/Platform";
import GameQuery from "./interfaces/GameQuery";
import platform from "./interfaces/Platform";
import SortSelector from "./components/SortSelector";

function App() {
    const breakpoints = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
    };

    const columns = {
        base: "1fr",
        lg: "200px 1fr",
    };

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid templateAreas={breakpoints} templateColumns={columns}>
            <GridItem area={"nav"}>
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside">
                    <GenreList
                        onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Flex pb="5">
                    <Box marginRight="5">
                        <PlatformSelector
                            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                            gameQuery={gameQuery}
                        />
                    </Box>
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}></SortSelector>
                </Flex>
                <GameGrid
                    gameQuery={gameQuery}
                />
            </GridItem>
        </Grid>
    );
}

export default App;
