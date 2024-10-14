import {Button, Grid, GridItem, Show} from '@chakra-ui/react'
import './App.css'
import NavBar from "./components/Navbar";

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
            <GridItem area={'main'}>Main</GridItem>
        </Grid>
    )
}

export default App
