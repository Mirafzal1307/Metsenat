<template>
  <div>
    <component :is="currentLayout" />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AdminNav from './components/Layout/AdminNav.vue'
import AuthLayout from './components/Layout/AuthLayout.vue'

const route = useRoute()

const currentLayout = computed(() => (route.meta.layout === 'default' ? AdminNav : AuthLayout))
</script>
