<!-- eslint-disable vue/no-v-for-template-key-on-child -->
<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <AdminNav />
    <div class="container mx-auto">
      <CTable
        :titles="titles"
        :data="sponsorsList"
        :total-items="totalItems"
        @update-page="updatePage"
      >
        <template #full_name="{ data }">
          <h2 class="truncate text-black text-base font-semibold whitespace-no-wrap capitalize">
            {{ data.full_name }}
          </h2>
        </template>
        <template #phone="{ data }">
          <pre class="text-black whitespace-no-wrap">
            {{ data.phone }}
          
          </pre>
        </template>
        <template #sum="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ formatNumber(data.sum) }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #spent="{ data }">
          <p class="text-black text-base font-semibold whitespace-no-wrap">
            {{ data.spent }} <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </template>
        <template #created_at="{ data }">
          <div class="">
            {{ formatDate(data.created_at) }}
          </div>
        </template>

        <template #get_status_display="{ data }">
          <p class="text-black whitespace-no-wrap">{{ data.get_status_display }}</p>
        </template>

        <template #actions>
          <div class="text-center">
            <CButton
              bg-color="bg-transparent"
              text-color="text-primary"
              type="button"
              class="inline-block font-bold text-2xl text-primary hover:text-gray-700 text-center"
            >
              <Icon icon="solar:eye-broken" />
            </CButton>
          </div>
        </template>
      </CTable>
    </div>
  </div>
</template>

<script setup>
import AdminNav from '@/components/Layout/AdminNav.vue'
import CTable from '@/components/table/CTable.vue'
import { useSponsorsStore } from '@/stores/sponsors.js'
import { formatDate, formatNumber } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'
import { Icon } from '@iconify/vue'
import CButton from '@/components/button/CButton.vue'

const sponsorsStore = useSponsorsStore()

const { sponsorsList, totalItems } = storeToRefs(sponsorsStore)

const { getSponsorsLists } = sponsorsStore

const updatePage = (page) => {
  getSponsorsLists(page)
}

onMounted(() => {
  getSponsorsLists(1)
})

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
    keys: 'actions'
  }
])
</script>
