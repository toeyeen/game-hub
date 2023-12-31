import useGenre from '../hooks/useGenre'

function GenreList() {
  const { genre } = useGenre()
  return (
    <ul>
      {genre.map((genre) => <li> {genre.name}</li>)}
    </ul>
  )
}

export default GenreList
