<script setup>
import './styles/main.css'
import Header from '@/components/Header/Header.vue'
</script>

<template>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 3rem;
}
</style>
