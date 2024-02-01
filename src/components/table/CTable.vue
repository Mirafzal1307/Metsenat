<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="w-full">
    <div class="py-10">
      <div class="inline-block min-w-full rounded-lg overflow-hidden">
        <table class="min-w-full leading-normal border-spacing-y-4 border-separate">
          <thead>
            <tr>
              <th
                v-for="(title, index) in props.titles"
                :keys="index"
                class="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {{ title.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in data" :key="user.id" class="gap-y-2 bg-white my-2 gap-3">
              <td class="px-5 py-5" v-for="header in titles" :key="header">
                <slot :name="header.keys">
                  <div class="flex">
                    <div class="flex-shrink-0 text-black w-10 h-10"></div>
                    <div class="ml-3">
                      <p class="text-black text-base font-semibold whitespace-no-wrap capitalize">
                        {{ getObjValueFromPath(user, header.keys) }}
                      </p>
                    </div>
                  </div>
                </slot>
              </td>
              
              <td class="px-5 py-5 text-center">
                <button
                  type="button"
                  class="inline-block font-bold text-2xl text-primary hover:text-gray-700"
                >
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

function getObjValueFromPath(obj, path) {
  // Split the path into an array of keys
  const keys = path.split('.')

  // Iterate over the keys to access nested properties
  let value = obj
  for (const key of keys) {
    // Check if the current value is an object and has the key
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      // If the key is not found or the value is not an object, return undefined
      return undefined
    }
  }

  // Return the final value
  return value
}
</script>
