<!-- eslint-disable vue/no-v-for-template-key-on-child -->
<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <AdminNav />
    <div class="container mx-auto">
      <CPagination :titles="titles" :data="sponsorsList" />
    </div>
 
  </div>
</template>

<script setup>
import AdminNav from '@/components/Layout/AdminNav.vue'
import CPagination from '@/components/pagination/CPagination.vue'
import { useSponsorsStore } from '@/stores/sponsors.js'
import { storeToRefs } from 'pinia'
import {  reactive } from 'vue';
const sponsorsStore = useSponsorsStore()

const { sponsorsList } = storeToRefs(sponsorsStore)

const titles = reactive([
  {
    title: 'F.I.SH.',
    keys: 'full_name'
  },
  {
    title: 'TEL.raqami',
    keys: 'phone'
  },
  {
    title: 'Homiylik summasi',
    keys: 'sum'
  },
  {
    title: 'Sarflangan summa',
    keys: 'spent'
  },
  {
    title: 'Sana',
    keys: 'created_at'
  },
  {
    title: 'Holati',
    keys: 'get_status_display'
  },
  {
    title: 'Amallar',
    keys: ''
  }
])


</script>
