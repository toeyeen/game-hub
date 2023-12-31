import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
    <Grid templateAreas={{
      base: `
      "navbar navbar navbar navbar"
      "content content content content"
      `,
      lg: `
      "navbar navbar navbar navbar"
      "sidebar content content content"
      `

    }}


      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='navbar'>
        <Navbar />
      </GridItem>
      <Show above={'lg'}>
        <GridItem area='sidebar' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='content'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
