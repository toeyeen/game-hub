import useGenre from '../hooks/useGenre'

function GenreList() {
  const { data: genre } = useGenre()
  return (
    <ul>
      {genre.map((genre) => <li key={genre.id}> {genre.name}</li>)}
    </ul>
  )
}

export default GenreList
