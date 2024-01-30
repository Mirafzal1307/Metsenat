<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <div class="py-10">
      <div class="inline-block min-w-full rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal border-spacing-y-4 border-separate ">
          <thead>
            <tr>
              <th
                v-for="(title, index) in props.titles"
                :keys="index"
                class="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in data"
              :key="user.id"
              class="gap-y-2 bg-white  my-2 gap-3"
            >
              <td class="px-5 py-5">
                <div class="flex">
                  <div class="flex-shrink-0 text-black w-10 h-10">
                    {{ index + 1 }}
                  </div>
                  <div class="ml-3">
                    <p class="text-black text-base font-semibold whitespace-no-wrap capitalize">
                      {{ user.full_name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5">
                <p class="text-black whitespace-no-wrap">{{ user.phone }}</p>
              </td>
              <td class="px-5 py-5">
                <p class="text-black text-base font-semibold whitespace-no-wrap">
                  {{ formatNumber(user.sum) }} <span class="text-[#B2B7C1]">UZS</span>
                </p>
              </td>
              <td class="px-5 py-5">
                <p class="text-black text-base font-semibold whitespace-no-wrap">
                  {{ user.spent }} <span class="text-[#B2B7C1]">UZS</span>
                </p>
              </td>
              <td class="px-5 py-5">
                <p class="text-black whitespace-no-wrap">{{ formatDate(user.created_at) }}</p>
              </td>
              <td class="px-5 py-5">
                <p class="text-black whitespace-no-wrap">{{ user.get_status_display }}</p>
              </td>
              <td class="px-5 py-5 text-center">
                <button type="button" class="inline-block font-bold text-2xl  text-primary hover:text-gray-700">
                  <Icon icon="solar:eye-broken" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

import { formatDate, formatNumber } from '../../utils/utils.js'

const props = defineProps({
  titles: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})
</script>
