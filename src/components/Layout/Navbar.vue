<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white sticky top-0  z-10 shadow-xl shadow-gray-100">
    <div class="flex justify-between items-center py-7  w-[1200px] mx-auto">
      <LogoMetsenat />
      <div class="flex items-center gap-x-4">
        <ul class="flex gap-8">
          <RouterLink :to="item.path" v-for="(item, index) in navInfo" :key="index">
            <li class="font-medium text-sm capitalize">{{ item.name }}</li>
          </RouterLink>
        </ul>
        <div class="flex">
          <CButton bg-color="bg-transparent" text-color="text-black">
            <Icon icon="ion:log-in" /> Kirish</CButton
          >
          <CButton
            bg-color="bg-transparent"
            text-color="text-[#3366FF]"
            borderRadius="rounded-lg"
            :border="true"
            border-color="border-2 border-[#3366FF] "
            >Ro'yhatdan o'tish</CButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import LogoMetsenat from './LogoMetsenat.vue'
import CButton from '../button/CButton.vue'
import { Icon } from '@iconify/vue'

const navInfo = reactive([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Login',
    path: '/login'
  }
])
</script>
