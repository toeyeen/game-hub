import { Box, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)



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
          <GenreList onSelectGenre={(genre: Genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area='content' paddingLeft={3}>
        <Box marginBottom={4} >

          <PlatformSelector />
        </Box  >
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
