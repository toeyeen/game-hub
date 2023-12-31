
import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { Genre } from '../hooks/useGenre'

interface GameGridProps {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}


function GameGrid({ selectedGenre, selectedPlatform }: GameGridProps) {

  const { data: games, error, isLoading } = useGames({ selectedGenre, selectedPlatform })

  return (
    <>

      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        base: 1,
        sm: 2,
        md: 3,
      }} spacing={10}>
        {isLoading && Array(9).fill(0).map((_, index) => <GameCardSkeleton key={index} />)}
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
