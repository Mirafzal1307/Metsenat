<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <AdminNav />
    <div class="container mx-auto">
      <CStudentTable :titles="titles" :data="studentsList" />
    </div>
  </div>
</template>

<script setup>
import AdminNav from '@/components/Layout/AdminNav.vue'
import CStudentTable from '@/components/table/CStudentTable.vue'
import { useStudentsStore } from '@/stores/students.js'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'

const studentsStore = useStudentsStore()

const { studentsList } = storeToRefs(studentsStore)
const { getStudentsLists } = studentsStore

const titles = reactive([
  'F.I.SH.',
  'Talabalik turi',
  'OTM',
  'Ajratilingan summa',
  'Kontrakt miqdori',
  'Amallar'
])

onMounted(() => {
  getStudentsLists()
})
</script>
