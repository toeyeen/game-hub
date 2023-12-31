import useData from "./useData";
import { Genre } from "./useGenre";


export interface Platform {
  id: number,
  name: string,
  slug: string,
}
export interface Game {
  id: string,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
}



const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {
  genres: selectedGenre?.id,

}, [selectedGenre?.id] as number[])

export default useGames;
