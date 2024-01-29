<template>
  <div>
    
    <div class="container mx-auto">
      <ul class="flex justify-center space-x-2 text-white">
        <li>
          <button
            :class="{ 'bg-blue-500': tab === 1, 'bg-gray-500': tab !== 1 }"
            @click="currentTab(1)"
            class="inline-block px-4 py-2 focus:outline-none"
          >
            Tab 1
          </button>
        </li>
        <li>
          <button
            :class="{ 'bg-blue-500': tab === 2, 'bg-gray-500': tab !== 2 }"
            @click="currentTab(2)"
            class="inline-block px-4 py-2 focus:outline-none"
          >
            Tab 2
          </button>
        </li>
      
      </ul>
      <div class="p-3 mt-6 text-center bg-white">
        <div v-if="tab === 1">1</div>
        <div v-if="tab === 2">2</div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref(1)
const currentTab = (tabNumber) => (tab.value = tabNumber)
</script>
