import { Box } from "@chakra-ui/react"

interface EmojiProps {
  rating: number

}

function Emoji({ rating }: EmojiProps) {

  const emojiMap: { [key: number]: string } = {
    1: '😡',
    2: '😕',
    3: '😐',
    4: '😇',
    5: '👌🏼',
  }

  return (
    <Box marginTop={1}>
      {emojiMap[rating]}
    </Box>
  )
}

export default Emoji
