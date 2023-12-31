
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'



function GameGrid() {

  const { data: games, error, isLoading } = useGames()

  return (
    <>

      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        base: 1,
        sm: 2,
        md: 3,
      }} padding='10px' spacing={10}>
        {isLoading && Array(9).fill(0).map((_, index) => <GameCardSkeleton key={index} />)}
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
