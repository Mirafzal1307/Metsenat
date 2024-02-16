<template>
  <div class="bg-gray-100 w-full h-screen">
    <div class="bg-white sticky z-10 shadow-xl shadow-gray-100">
      <div class="py-6 container mx-auto">
        <div>
          <NavFooter>
            <h2 class="flex items-center gap-3 font-bold text-2xl text-black">
              <div @click="$router.go(-1)" class="cursor-pointer hover:text-primary">
                <Icon icon="material-symbols:arrow-back-rounded" />
              </div>
              Talaba qoshish
            </h2>
          </NavFooter>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="grid grid-cols-8">
        <div
          class="col-span-4 col-start-3 flex items-center justify-center bg-white mt-32 rounded-xl p-8 flex-col"
        >
          <div class="flex flex-col w-full">
            <div class="flex gap-4 w-full">
              <CInput
                type="text"
                label="F.I.Sh. (Familiya Ism Sharif)"
                placeholder="Abdullayev Abdulla Abdulla o'g'li"
                class="w-full"
              />
              <CInput
                type="text"
                label="Telefon raqam"
                placeholder="+998 00 000-00-00"
                class="w-full"
              />
            </div>

            <CSelect />
            <CButton bg-color="bg-primary" text-color="text-white" class="text-base font-medium">
              <Icon icon="ph:plus-bold" /> Qo'shish
            </CButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavFooter from '@/components/Layout/components/NavFooter.vue'
import CButton from '@/components/button/CButton.vue'
import CInput from '@/components/form/input/CInput.vue'
import CSelect from '@/components/form/select/CSelect.vue'
import { Icon } from '@iconify/vue'
</script>
