/* eslint-disable no-debugger */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getSponsorsList } from '@/service/sponsors.service'

export const useSponsorsStore = defineStore('sponsors', () => {
  const loading = ref(false)
  let sponsorsList = ref([])

  const getSponsorsLists = async () => {
    try {
      loading.value = true

      const data = await getSponsorsList()
      console.log(data)
      sponsorsList.value = data.results
      return data
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { getSponsorsLists, sponsorsList }
})
