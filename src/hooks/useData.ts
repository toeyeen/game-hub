import { useEffect, useState } from "react";
import apiclient, { FetchError } from "../services/api-service";
import { SearchParameters } from "ofetch";
import { GameQuery } from "../App";

// interface Genre {
//   id: number,
//   name: string,
//   slug: string,
// }

interface FetchResponse<T> {
  count: number,
  results: T[]
}


const useData = <T>(endpoint: string, optionsParams?: SearchParameters, deps?: GameQuery[]) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const controller = new AbortController()


  useEffect(() => {
    setIsLoading(true)
    apiclient<FetchResponse<T>>(endpoint, {
      signal: controller.signal,
      params: {
        ...optionsParams
      },
    })
      .then(res => {
        setData(res.results)
        setIsLoading(false)
      })
      .catch((err: FetchError) => {
        if (err.status === undefined) return;
        setError(err.message);
        setIsLoading(false)
      })

    // return () => controller.abort('Cancelled')
  }, deps ? [...deps] : [])


  return { data, error, isLoading }


};


export default useData;
