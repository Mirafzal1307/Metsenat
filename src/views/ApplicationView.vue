<template>
  <Navbar />
  <div class="bg-[url(../assets/image/Right.svg)] bg-no-repeat bg-right">
    <div class="container mx-auto  ">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1 pb-20">
          <h2 class="font-bold pt-10 text-5xl text-clip text-wrap">
            Homiy sifatida ariza topshirish
          </h2>
          <div class="pt-10">
            <ul class="flex">
              <li class="w-full">
                <button
                  :class="{
                    'bg-blue-500 text-white border-2 border-primary': tab === 1,
                    'bg-white text-primary': tab !== 1
                  }"
                  @click="currentTab(1)"
                  class="inline-block px-4 focus:outline-none rounded-l w-full py-3 border-[#E0E7FF] border-2"
                >
                  Jismoniy shaxs
                </button>
              </li>
              <li class="w-full">
                <button
                  :class="{
                    'bg-blue-500 text-white border-2 border-primary': tab === 2,
                    'bg-white text-primary': tab !== 2
                  }"
                  @click="currentTab(2)"
                  class="inline-block px-4 focus:outline-none rounded-r w-full py-3 border-[#E0E7FF] border-2"
                >
                  Yuridik shaxs
                </button>
              </li>
            </ul>
            <div class="text-center bg-white">
              <div v-if="tab === 1">
                <CInput
                  v-model="test"
                  id="1"
                  class="mt-7"
                  type="text"
                  placeholder="Abdullayev Abdulla Abdulla o’g’li "
                  label="F.I.Sh. (Familiya Ism Sharifingiz)"
                />
                <CInput
                  v-model="test"
                  id="2"
                  class="mt-7"
                  type="tel"
                  placeholder="+998 00 000 00 00"
                  label="Telefon raqamingiz"
                />
                <div class="text-start mt-7 mb-2">
                  <label for="payment" class="text-xs text-black font-bold uppercase"> To‘lov summasi</label>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="(item, index) in payment"
                    :key="index"
                    id="payment"
                    class="col-span-1 cursor-pointer py-5 border rounded font-bold text-lg border-[#E0E7FF]"
                  >
                    {{ item.soum }}
                    <span v-show="item.show" class="font-normal text-xs text-primary">UZS</span>
                  </button>
                </div>
                <CButton class="mt-7">Yuborish</CButton>
              </div>
              <div v-if="tab === 2">
                <CInput
                  v-model="test"
                  id="1"
                  class="mt-7"
                  type="text"
                  placeholder="Abdullayev Abdulla Abdulla o’g’li "
                  label="F.I.Sh. (Familiya Ism Sharifingiz)"
                />
                <CInput
                  v-model="test"
                  id="2"
                  class="mt-7"
                  type="tel"
                  placeholder="+998 00 000 00 00"
                  label="Telefon raqamingiz"
                />
                <div class="text-start mt-7 mb-2">
                  <label for="payment" class="text-xs text-black font-bold uppercase"> To‘lov summasi</label>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="(item, index) in payment"
                    :key="index"
                    id="payment"
                    class="col-span-1 cursor-pointer py-5 border rounded font-bold text-lg border-[#E0E7FF]"
                  >
                    {{ item.soum }}
                    <span v-show="item.show" class="font-normal text-xs text-primary">UZS</span>
                  </button>
                </div>
                <CInput
                  v-model="test"
                  id="3"
                  class="mt-7"
                  type="text"
                  placeholder="Orient group"
                  label="Tashkilot nomi"
                />
                <CButton class="mt-7">Yuborish</CButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Layout/Navbar.vue'
import CButton from '@/components/button/CButton.vue'
import CInput from '@/components/form/input/CInput.vue'
import { reactive, ref } from 'vue'

const tab = ref(1)
const test = ref('')
const payment = reactive([
  {
    soum: '1 000 000',
    show: true
  },
  {
    soum: '1 000 000',
    show: true
  },
  {
    soum: '1 000 000',
    show: true
  },
  {
    soum: '1 000 000',
    show: true
  },
  {
    soum: '1 000 000',
    show: true
  },
  {
    soum: 'BOSHQA',
    show: false
  }
])
const currentTab = (tabNumber) => (tab.value = tabNumber)
</script>
