import { useEffect, useState } from "react";
import apiclient, { FetchError } from "../services/api-service";


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

interface FetchGamesResponse {
  count: number,
  results: Game[]
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const controller = new AbortController()


  useEffect(() => {
    setIsLoading(true)
    apiclient<FetchGamesResponse>('/games', {
      signal: controller.signal,
    })
      .then(res => {
        setGames(res.results)
        setIsLoading(false)
      })
      .catch((err: FetchError) => {
        console.log(err.status);
        if (err.status === undefined) return;
        setError(err.message);
        setIsLoading(false)
      })

    // return () => controller.abort('Cancelled')
  }, [])


  return { games, error, isLoading }


};

export default useGames;
