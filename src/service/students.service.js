import { useFetch } from '@/plugins/fetch'

const { get } = useFetch()

export const getStudentsList = async (page) => {
  const data = await get(`student-list/?page=${page}`)
  console.log(data.results)

  return data
}

export const getStudentById = async (id) => {
  const data = await get(`student-detail/${id}`)

  return data
}