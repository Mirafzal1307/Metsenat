<template>
  <div
    class="bg-gray-100 w-full h-screen bg-[url('../assets/image/viewBgImg.svg')] bg-no-repeat bg-bottom"
  >
    <div class="bg-white sticky z-10 shadow-xl shadow-gray-100">
      <div class="py-6 container mx-auto">
        <div>
          <NavFooter>
            <div class="flex items-center gap-3">
              <h2 class="flex items-center gap-3 font-bold text-2xl text-black">
                <div @click="$router.go(-1)" class="cursor-pointer hover:text-primary">
                  <Icon icon="material-symbols:arrow-back-rounded" />
                </div>
                {{ sponsorInfo.full_name }}
              </h2>
              <span
                v-if="sponsorInfo.is_legal"
                class="bg-green-100 text-green-500 p-1 rounded text-xs"
                >Tasdiqlangan</span
              >
              <span v-else class="bg-red-100 text-red-500 p-1 rounded text-xs"
                >Tasdiqlanmagan
              </span>
            </div>
          </NavFooter>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="grid grid-cols-8">
        <div
          class="col-span-4 col-start-3 flex items-center justify-center bg-white mt-32 rounded-xl p-8 flex-col"
        >
          <div class="flex justify-between w-full items-center">
            <h2 class="font-bold text-2xl">Homiy haqida</h2>
            <CButton
              bg-color="bg-primaryLight"
              text-color="text-primary"
              class="text-base font-medium"
            >
              <Icon icon="material-symbols:edit" /> Taxrirlash
            </CButton>
          </div>
          <div class="flex gap-4 justify-start w-full pt-4 items-center">
            <div class="bg-gray-200 rounded-md p-3">
              <span class="text-3xl text-primary">
                <Icon icon="fa-solid:user-tie" />
              </span>
            </div>
            <h3 class="text-2xl font-bold capitalize">{{ sponsorInfo.full_name }}</h3>
          </div>
          <div class="flex w-full pt-5">
            <div class="w-full">
              <p class="uppercase text-gray-400 font-semibold text-sm pb-3">telefon raqami</p>
              <p class="text-base font-bold">{{ formatPhoneNumber(sponsorInfo.phone) }}</p>
            </div>
            <div class="w-full">
              <p class="uppercase text-gray-400 font-semibold text-sm pb-3">Homiylik summasi</p>
              <p class="text-base font-bold">{{ sponsorInfo.sum }} UZS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useSponsorsStore } from '@/stores/sponsors.js'
import CButton from '@/components/button/CButton.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { formatPhoneNumber } from '@/utils/utils.js'
import NavFooter from '@/components/Layout/components/NavFooter.vue'

const sponsorsStore = useSponsorsStore()

const { sponsorInfo } = storeToRefs(sponsorsStore)

const { getSponsorInfoById } = sponsorsStore

const router = useRouter()

const sponsorId = router.currentRoute.value.query.id

console.log(sponsorId)

onMounted(() => {
  getSponsorInfoById(sponsorId)
})
</script>
