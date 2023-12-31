import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenre'
import { getCroppedImageUrl } from '../utils'

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

function GenreList({ onSelectGenre, selectedGenre }: GenreListProps) {




  const { data: genre, isLoading, error } = useGenre()
  return (

    <List>
      {error && null}
      {isLoading && <Spinner />}
      {genre.map((genre) =>
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack >
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} >
            </Image>
            <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant={'link'} fontSize={'large'}>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList
