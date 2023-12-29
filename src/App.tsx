import { Grid, GridItem, Show } from '@chakra-ui/react'

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

    }}>
      <GridItem area='navbar' bg='coral'>
        Navbar
      </GridItem>
      <Show above={'lg'}>
        <GridItem area='sidebar' bg='dodgerblue'>
          Sidebar
        </GridItem>
      </Show>
      <GridItem area='content' bg='yellow'>
        Content
      </GridItem>
    </Grid>
  )
}

export default App
