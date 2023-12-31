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

export interface UseGamesProps {
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
}



const useGames = (options: UseGamesProps) => useData<Game>('/games', {
  genres: options.selectedGenre?.id,
  platforms: options.selectedPlatform?.id,

}, [options.selectedGenre?.id, options.selectedPlatform?.id] as number[])

export default useGames;
