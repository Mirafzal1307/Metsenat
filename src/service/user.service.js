import { useFetch } from '@/plugins/fetch'

const { post } = useFetch()

export const login = async (userCredentials) => {
  const userData = JSON.parse(userCredentials)

  const { data } = await post('auth/login/', userData)

  return data
}
