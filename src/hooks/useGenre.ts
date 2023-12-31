import { useEffect, useState } from "react"
import apiclient, { FetchError } from "../services/api-service"

interface Genre {
  id: number,
  name: string,
  slug: string,
}

interface FetchGenreResponse {
  count: number,
  results: Genre[]
}

const useGenre = () => {

  const [genre, setGenre] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const controller = new AbortController()


  useEffect(() => {
    setIsLoading(true)
    apiclient<FetchGenreResponse>('/genres', {
      signal: controller.signal,
    })
      .then(res => {
        setGenre(res.results)
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


  return { genre, error, isLoading }


}

export default useGenre;
