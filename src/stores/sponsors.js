/* eslint-disable no-debugger */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getSponsorsList, getSponsorById } from '@/service/sponsors.service'

export const useSponsorsStore = defineStore('sponsors', () => {
  const loading = ref(false)
  let sponsorsList = ref([])
  let totalItems = ref(0)
  let sponsorInfo = ref({})
  const getSponsorsLists = async (page) => {
    try {
      loading.value = true

      const { count, results } = await getSponsorsList(page)
      console.log(sponsorsList.value)
      sponsorsList.value = results
      totalItems.value = count

      return {
        count,
        results
      }
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  const getSponsorInfoById = async (id) => {
    try {
      loading.value = true

      const data = await getSponsorById(id)
      console.log(data)
      sponsorInfo.value = data
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { getSponsorsLists, getSponsorInfoById, sponsorsList, totalItems, sponsorInfo }
})
