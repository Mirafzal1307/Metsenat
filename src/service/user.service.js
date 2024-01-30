import { useFetch } from '@/plugins/fetch'

const { post } = useFetch()

export const login = async (userCredentials) => {
  const data = await post('auth/login/', userCredentials)

  return data
}
