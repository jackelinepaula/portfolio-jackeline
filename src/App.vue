<script setup lang="js">
import './styles/main.css'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <main>
    <router-view />
  </main>
  <Footer />
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
