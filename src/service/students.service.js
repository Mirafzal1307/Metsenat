import { useFetch } from '@/plugins/fetch'

const { get } = useFetch()

export const getStudentsList = async () => {
  const data = await get('student-list/')
  console.log(data.results)

  return data
}
