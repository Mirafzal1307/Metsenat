import { useFetch } from '@/plugins/fetch'

const { get } = useFetch()

export const getSponsorsList = async (page) => {
  const data = await get(`sponsor-list/?page=${page}`)

  return data
}
