<template>
  <div class="bg-green-600 text-red-400 font-black " >this is about page</div>
  <div>
    <button @click="openModal">Open generic modal</button>
  </div>
  <CModal :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
    <template #header>Custom header</template>
    <template #content>Custom content</template>
    <template #footer>Custom content</template>
  </CModal>
</template>

<script setup>
import { ref } from 'vue';
import CModal from '@/components/modal/CModal.vue'; 

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = ()=>{
  //here you do whatever
}
</script>
