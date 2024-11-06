import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import { Dispatch, SetStateAction, useState } from "react";
import GenreList from "./components/GenreList";
import Genre from "./interfaces/Genre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
    const breakpoints = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
    };

    const columns = {
        base: "1fr",
        lg: "200px 1fr",
    };

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    return (
        <Grid templateAreas={breakpoints} templateColumns={columns}>
            <GridItem area={"nav"}>
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside">
                    <GenreList
                        onSelectGenre={setSelectedGenre}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Flex pb="3">
                    <PlatformSelector></PlatformSelector>
                </Flex>
                <GameGrid selectedGenre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}

export default App;
