<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <div class="container mx-auto pt-10">
      <div class="grid grid-cols-6">
        <div class="col-span-1 col-start-6">
          <RouterLink to="/add-student">
            <CButton> <Icon icon="material-symbols:add" /> Talaba qoshish </CButton>
          </RouterLink>
        </div>
      </div>

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
          <p
            class="text-black text-base font-semibold whitespace-no-wrap text-ellipsis overflow-hidden"
          >
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
        <template #actions="{ data }">
          <div class="text-center">
            <RouterLink :to="{ name: 'student-view', query: { id: data?.id } }">
              <CButton
                bg-color="bg-transparent"
                text-color="text-primary"
                type="button"
                class="inline-block font-bold text-2xl text-primary hover:text-gray-700 text-center"
              >
                <Icon icon="solar:eye-broken" />
              </CButton>
            </RouterLink>
          </div>
        </template>
      </CTable>
    </div>
  </div>
</template>

<script setup>
import CTable from '@/components/table/CTable.vue'
import { useStudentsStore } from '@/stores/students.js'
import { formatNumber } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'
import { Icon } from '@iconify/vue'
import CButton from '@/components/button/CButton.vue'

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
