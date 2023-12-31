import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface GameHeadingProps {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: GameHeadingProps) {

  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading as='h1' size='2xl' marginBottom={4} >
      {heading}
    </Heading>
  )
}

export default GameHeading
