import { Badge } from "@chakra-ui/react"

interface CriticScoreProps {
  score: number
}


function CriticScore({ score }: CriticScoreProps) {

  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'

  return (
    <Badge fontSize={'14px'} paddingX={2} borderRadius={'4px'} colorScheme={color}>
      {score}
    </Badge>
  )
}

export default CriticScore
