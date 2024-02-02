import { useFetch } from '@/plugins/fetch'

const { get } = useFetch()

export const getStudentsList = async (page) => {
  const data = await get(`student-list/?page=${page}`)
  console.log(data.results)

  return data
}
