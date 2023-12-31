import PlatformIconList from './PlatformIconList'
import { Game } from './hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
interface GameCardProps {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>
          {game.name}
        </Heading>
        <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
      </CardBody>
    </Card>
  )
}

export default GameCard
