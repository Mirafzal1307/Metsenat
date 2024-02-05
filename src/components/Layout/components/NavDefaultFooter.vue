<template>
  <div class="col-span-3">
    <div class="pt-2">
      <ul class="flex">
        <li class="w-full" v-for="item in pages" :key="item.id">
          <RouterLink :to="item.path">
            <button
              :class="[
                item.border,
                {
                  'bg-blue-500 text-white border-2 border-primary ease-out duration-500 ':
                    tab === item.id
                }
              ]"
              @click="currentTab(item.id)"
              class="inline-block px-4 focus:outline-none w-full py-3 border-[#E0E7FF] border-2 uppercase ease-in duration-400"
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
</template>

<script setup>
import { reactive, ref } from 'vue';
import CInput from '../../../components/form/input/CInput.vue'
import { useRouter  } from 'vue-router'
import { Icon } from '@iconify/vue'
import CButton from '../../../components/button/CButton.vue'

const router = useRouter()


const pages = reactive([
  { id: 1, name: 'Dashboard', path: '/', border: 'rounded-l' },
  { id: 2, name: 'Homiylar', path: '/sponsors', border: 'rounded-none ' },
  { id: 3, name: 'Talabalar', path: '/students', border: 'rounded-r' }
])

const currentPage = pages.find((page) => page.path === router.currentRoute.value.path)

console.log(currentPage);

const tab = ref(currentPage?.id)

const currentTab = (tabNumber) => {
  console.log(tabNumber)
  tab.value = tabNumber
}
</script>
