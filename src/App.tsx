import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";



const App = () => {
  return (
    <>
      {/* create responsive layout */}
      {/* nav, aside, main_____responsive for desktop and mobile */}  
      <Grid templateAreas={{
        base:`'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, //992p
      }}>
        <GridItem area="nav" >
          <NavBar/>
         
        </GridItem>

        <Show above="lg">
        <GridItem area="aside" >
          {""}
          Aside
          </GridItem>

        </Show>
        <GridItem area="main" >
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App