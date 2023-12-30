import { ofetch, FetchError } from 'ofetch'

const apiclient = ofetch.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd9c6e10618104b2fbbd9713ad9384cd9'
  }
})

export { FetchError }

export default apiclient
