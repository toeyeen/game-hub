import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import { getCroppedImageUrl } from '../utils'

function GenreList() {
  const { data: genre } = useGenre()
  return (
    <List>
      {genre.map((genre) =>
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack >
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} >
            </Image>
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList
