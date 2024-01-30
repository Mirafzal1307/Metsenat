/* eslint-disable no-debugger */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getStudentsList } from '@/service/students.service.js'

export const useStudentsStore = defineStore('students', () => {
  const loading = ref(false)
  let studentsList = ref([])

  const getStudentsLists = async () => {
    try {
      loading.value = true

      const data = await getStudentsList()
      console.log(data)
      studentsList.value = data.results
      return data
    } catch (e) {
      console.log(e)
      return e
    } finally {
      loading.value = false
    }
  }

  return { getStudentsLists, studentsList }
})
