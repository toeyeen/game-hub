import { genres } from "../data/index";
export interface Genre {
  id: number,
  name: string,
  slug: string,
  image_background: string,
}


const useGenre = () => ({
  data: genres, isLoading: false, error: null
})

export default useGenre;
