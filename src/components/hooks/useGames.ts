import { useEffect, useState } from "react";
import apiclient, { FetchError } from "../../services/api-service";

export interface Game {
  id: string,
  name: string,
  background_image: string,
}

interface FetchGamesResponse {
  count: number,
  results: Game[]
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  const controller = new AbortController()


  useEffect(() => {
    apiclient<FetchGamesResponse>('/games', {
      signal: controller.signal,
    })
      .then(res => setGames(res.results))
      .catch((err: FetchError) => {
        console.log(err.status);
        if (err.status === undefined) return;
        setError(err.message);
      })

    return () => controller.abort('Cancelled')
  }, [])


  return { games, error }


};

export default useGames;
