import { ofetch, FetchError } from 'ofetch'

const apiclient = ofetch.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9d5ca48c759e416cbcbf5a50c49af6cb'
  }
})

export { FetchError }

export default apiclient
