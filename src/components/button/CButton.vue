<template>
  <div>
    <button
      :class="[bgColor, textColor, borderColor, borderRadius]"
      class="font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex items-center justify-center gap-1 w-full "
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buttonBorder = ref('')

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-primary',
    required: true
  },
  textColor: {
    type: String,
    default: 'text-white',
    required: true
  },

  borderRadius: {
    type: String,
    default: 'rounded'
  },
  borderColor: {
    type: String,
    default: ''
  }
})

if (props.border) {
  buttonBorder.value = 'border'
}
</script>
