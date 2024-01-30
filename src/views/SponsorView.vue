<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <AdminNav />
    <div class="w-[1200px] mx-auto">
      <CTable :titles="titles" :data="sponsorsList" />
    </div>
   
  </div>
</template>

<script setup>
import AdminNav from '@/components/Layout/AdminNav.vue'
import CTable from '@/components/table/CTable.vue'
import { useSponsorsStore } from '@/stores/sponsors.js'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'


const sponsorsStore = useSponsorsStore()

const { sponsorsList } = storeToRefs(sponsorsStore)
const { getSponsorsLists } = sponsorsStore

const titles = reactive([
  'F.I.SH.',
  'TEL.raqami',
  'Homiylik summasi',
  'Sarflangan summa',
  'Sana',
  'Holati',
  'Amallar'
])

onMounted(() => {
  getSponsorsLists()
})
</script>
