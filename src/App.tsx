import {Button, Grid, GridItem, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import {Dispatch} from "react";
import GenreList from "./components/GenreList";

function App() {
    const breakpoints = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }

    const columns = {
        base: '1fr',
        lg: '200px 1fr'
    }
    return (
        <Grid templateAreas={breakpoints} templateColumns={columns}>
            <GridItem area={'nav'}>
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside'>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
