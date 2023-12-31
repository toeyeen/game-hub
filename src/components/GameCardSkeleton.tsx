import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import GameCardContainter from './GameCardContainter'

function GameCardSkeleton() {
  return (
    <GameCardContainter>
      <Card>
        <Skeleton height={'200px'} />
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </GameCardContainter>
  )
}

export default GameCardSkeleton
