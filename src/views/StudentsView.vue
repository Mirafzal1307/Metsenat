<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <AdminNav />
    <div class="container mx-auto">
      <CTable
        :titles="titles"
        :data="studentsList"
        :total-items="totalItems"
        @update-page="updatePage"
      >
        <template #full_name="{ data }">
          <h2 class="truncate text-black text-base font-semibold whitespace-no-wrap capitalize">
            {{ data.full_name }}
          </h2>
        </template>
        <template #type="{ data }">
          <pre class="text-black whitespace-no-wrap">
            {{ data.type == 2 ? 'Magistr' : 'Bakalavr' }}
          </pre>
        </template>
        <template #institute="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap text-ellipsis overflow-hidden">
            {{ data.institute.name }}
          </p>
        </template>
        <template #given="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ formatNumber(data.given) }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #contract="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ formatNumber(data.contract) }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #actions>
          <div class="text-center">
            <button
              type="button"
              class="inline-block font-bold text-2xl text-primary hover:text-gray-700 text-center"
            >
              <Icon icon="solar:eye-broken" />
            </button>
          </div>
        </template>
      </CTable>
    </div>
  </div>
</template>

<script setup>
import AdminNav from '@/components/Layout/AdminNav.vue'
import CTable from '@/components/table/CTable.vue'
import { useStudentsStore } from '@/stores/students.js'
import { formatNumber } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'
import { Icon } from '@iconify/vue'

const studentsStore = useStudentsStore()

const { studentsList, totalItems } = storeToRefs(studentsStore)
const { getStudentsLists } = studentsStore

const titles = reactive([
  {
    title: 'F.I.SH.',
    keys: 'full_name'
  },
  {
    title: 'Talabalik turi',
    keys: 'type'
  },
  {
    title: 'OTM',
    keys: 'institute'
  },
  {
    title: 'Ajratilingan summa ',
    keys: 'given'
  },
  {
    title: 'Kontrakt miqdori',
    keys: 'contract'
  },
  {
    title: 'Amallar',
    keys: 'actions'
  }
])

const updatePage = (page) => {
  getStudentsLists(page)
}

onMounted(() => {
  getStudentsLists(1)
})
</script>
