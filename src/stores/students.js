/* eslint-disable no-debugger */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getStudentsList } from '@/service/students.service.js'

export const useStudentsStore = defineStore('students', () => {
  const loading = ref(false)
  let studentsList = ref([])
  let totalItems = ref(0)

  const getStudentsLists = async (page) => {
    try {
      loading.value = true

      const { results, count } = await getStudentsList(page)
      studentsList.value = results
      totalItems.value = count
      return { results, count }
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { getStudentsLists, studentsList, totalItems }
})
