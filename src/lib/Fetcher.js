import axios from './axios'

export const fetcher = async url => {
  const result = await axios.get(url)
  return result.data
}
