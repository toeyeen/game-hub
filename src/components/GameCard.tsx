import PlatformIconList from './PlatformIconList'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import GameCardContainter from './GameCardContainter'
import { getCroppedImageUrl } from '../utils'
interface GameCardProps {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <GameCardContainter>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize='2xl'>
            {game.name}
          </Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainter>
  )
}

export default GameCard
