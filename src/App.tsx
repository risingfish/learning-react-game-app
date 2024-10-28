import {Button, Grid, GridItem, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import {Dispatch} from "react";

function App() {
    const breakpoints = {
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }
    return (
        <Grid templateAreas={breakpoints}>
            <GridItem area={'nav'}>
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area={'aside'}>Aside</GridItem>
            </Show>
            <GridItem area={'main'}>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default App
