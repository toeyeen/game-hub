
import { Text } from '@chakra-ui/react'
import useGames from './hooks/useGames'



function GameGrid() {

  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map(game => <div key={game.id}>{game.name}</div>)}
    </>
  )
}

export default GameGrid
