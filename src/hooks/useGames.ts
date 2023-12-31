import { GameQuery } from "../App";
import useData from "./useData";


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
  gameQuery: GameQuery
}



const useGames = (options: UseGamesProps) => useData<Game>('/games', {
  genres: options.gameQuery.genre?.id,
  platforms: options.gameQuery.platform?.id,

}, [options.gameQuery])

export default useGames;
