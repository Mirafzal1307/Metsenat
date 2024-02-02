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
    <div class="bg-white sticky z-10 shadow-xl shadow-gray-100">
      <div class="grid grid-cols-7 py-6 container mx-auto">
        <div class="col-span-3">
          <div class="pt-2">
            <ul class="flex">
              <li class="w-full" v-for="item in pages" :key="item.id">
                <RouterLink :to="item.path">
                  <button
                    :class="[
                      item.border,
                      {
                        'bg-blue-500 text-white border-2 border-primary ease-out duration-1000 ': tab === item.id
                      }
                    ]"
                    @click="currentTab(item.id)"
                    class="inline-block px-4 focus:outline-none w-full py-3 border-[#E0E7FF] border-2 uppercase ease-in duration-1000 "
                  >
                    {{ item.name }}
                  </button>
                </RouterLink>
              </li>
            </ul>
          
          </div>
        </div>
        <div class="col-span-3 col-start-5">
          <div class="flex items-center gap-3">
            <CInput id="filter" type="text" placeholder="Izlash" class="w-full" />
            <CButton
              bg-color="bg-[#EDF1FD]"
              text-color="text-primary"
              class="w-full bg-[#EDF1FD] py-1 mt-2 rounded"
            >
              <Icon icon="uil:filter " /> Filter
            </CButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoMetsenat from './LogoMetsenat.vue'
import CButton from '../button/CButton.vue'
import { Icon } from '@iconify/vue'
import { reactive, ref } from 'vue'
import CInput from '../form/input/CInput.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router.currentRoute.value)

const pages = reactive([
  { id: 1, name: 'Dashboard', path: '/', border: 'rounded-l' },
  { id: 2, name: 'Homiylar', path: '/sponsors', border: 'rounded-none ' },
  { id: 3, name: 'Talabalar', path: '/students', border: 'rounded-r' }
])

const currentPage = pages.find((page) => page.path === router.currentRoute.value.path)

const tab = ref(currentPage.id)

const currentTab = (tabNumber) => {
  console.log(tabNumber)
  tab.value = tabNumber
}

const logout = () => {
  localStorage.clear()
  router.push('/application')
}
</script>
