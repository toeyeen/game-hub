import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface GameCardContainterProps {
  children: ReactNode
}
function GameCardContainter({ children }: GameCardContainterProps) {
  return (
    <Box borderRadius={10} overflow='hidden' >
      {children}
    </Box>
  )
}

export default GameCardContainter
