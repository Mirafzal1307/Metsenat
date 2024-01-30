<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="bg-white sticky top-0 z-20 shadow-xl shadow-gray-100">
      <div class="flex justify-between items-center py-7 w-[1200px] mx-auto">
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
      <div class="grid grid-cols-7 py-6 w-[1200px] mx-auto">
        <div class="col-span-3">
          <div class="pt-2">
            <ul class="flex">
              <li class="w-full" v-for="item in pages" :key="item.id">
                <RouterLink :to="item.path">
                  <button
                    :class="[
                      item.border,
                      {
                        'bg-blue-500 text-white border-2 border-primary': tab === item.id,
                        'bg-white text-primary': tab !== item.id
                      }
                    ]"
                    @click="currentTab(item.id)"
                    class="inline-block px-4 focus:outline-none w-full py-3 border-[#E0E7FF] border-2 uppercase"
                  >
                    {{ item.name }}
                  </button>
                </RouterLink>
              </li>
            </ul>
            <div class="text-center bg-white">
              <!-- <div v-if="tab === 1">tap 1</div>
              <div v-if="tab === 2">tab 2</div>
              <div v-if="tab === 3">tab 3</div> -->
            </div>
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
// onMounted(() => {
//   const router = this.$route.name
//   console.log(router)
// })
const tab = ref(1)
const pages = reactive([
  { id: '1', name: 'Dashboard', path: '/', border: 'rounded-l' },
  { id: '2', name: 'Homiylar', path: '/sponsors', border: 'rounded-none ' },
  { id: '3', name: 'Talabalar', path: '/students', border: 'rounded-r' }
])

const currentTab = (tabNumber) => (tab.value = tabNumber)

const logout = () => {
  localStorage.clear()
  router.push('/application')
}
</script>
