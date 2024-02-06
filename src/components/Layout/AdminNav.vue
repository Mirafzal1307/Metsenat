<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="bg-white sticky top-0 z-20 shadow-xl shadow-gray-100">
      <div class="flex justify-between items-center py-7 container mx-auto">
        <LogoMetsenat />
        <div class="flex items-center gap-x-4">
          <div class="flex">
            <CButton bg-color="bg-secondary" text-color="text-black">
              Shoxrux
              <span class="p-1 bg-green-400 rounded text-white ml-2"><Icon icon="mdi:user" /></span>
            </CButton>
            <CButton bg-color="bg-transparent" @click="logout">
              <span class="text-gray-600 pt-1"> <Icon icon="fa:sign-out" /> </span>
            </CButton>
          </div>
        </div>
      </div>
    </div>
    <div v-if="route.meta.page !== 'view'" class="bg-white sticky z-10 shadow-xl shadow-gray-100">
      <div class="grid grid-cols-7 py-6 container mx-auto">
        <NavDefaultFooter/>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import LogoMetsenat from './LogoMetsenat.vue'
import CButton from '../button/CButton.vue'
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'
import NavDefaultFooter from './components/NavDefaultFooter.vue'

const router = useRouter()
const route = useRoute()


const logout = () => {
  localStorage.clear()
  router.push('/application')
}
</script>
