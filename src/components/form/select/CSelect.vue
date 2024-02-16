<template>
  <div>
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const selectedOption = ref(null)

const options = reactive([
  {
    value: 'options1',
    label: 'option 1'
  }
])

</script>
