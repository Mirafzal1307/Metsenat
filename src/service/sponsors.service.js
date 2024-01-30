import { useFetch } from '@/plugins/fetch'

const { get } = useFetch()

export const getSponsorsList = async () => {
  const data = await get('sponsor-list/')
  console.log(data.results)

  return data
}
