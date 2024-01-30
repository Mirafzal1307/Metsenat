/* eslint-disable no-debugger */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/service/user.service'

export const useUserStore = defineStore('user', () => {
  const loading = ref(false)

  const userLogin = async (userCredentials) => {
    const userCredential = JSON.stringify(userCredentials)
    try {
      loading.value = true

      const data = await login(userCredential)

      localStorage.setItem('refresh_token', data.refresh)
      localStorage.setItem('access_token', data.access)

      return data
    } catch (e) {
      
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { userLogin }
})
