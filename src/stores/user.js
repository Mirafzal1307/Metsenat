/* eslint-disable no-debugger */
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/service/user.service'

export const useUserStore = defineStore('user', () => {
  let user = reactive({})
  const loading = ref(false)

  const userLogin = async (userCredentials) => {
    const userCredential = JSON.stringify(userCredentials)
    try {
      loading.value = true

      const { data } = await login(userCredential)
      user = data
      localStorage.setItem('user', JSON.stringify(user))
      return data
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { user, userLogin }
})
