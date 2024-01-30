<template>
  <div class="container mx-auto" >
    <div class="grid grid-cols-3 mx-auto">
     <div class="col-span-1" >
      hello div
     </div>
  </div>
  </div>
 
</template>

<script setup>

import { ref } from 'vue'

const val = ref('')

console.log(val)
</script>
