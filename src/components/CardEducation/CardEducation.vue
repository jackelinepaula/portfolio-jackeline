<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  plus: {
    type: String,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
})
</script>
<template>
  <div class="cardEducation">
    <div style="display: flex; flex-direction: column; gap: 0.25rem">
      <p class="plus">{{ plus }}</p>
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>
<style scoped>
.cardEducation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 120px;
  gap: 1rem;
  padding: 1rem;
  border-left: 0.2rem solid var(--purple);
}

.plus {
  color: var(--purple);
  font-size: 0.9rem;
  border-radius: 0.25rem;
  width: 150px;
  min-width: 150px;
  margin-bottom: 0.25rem;
}

.title {
  font-size: 1rem;
  width: 100%;
}

.subtitle {
  color: #b8b8b8;
  font-size: 0.95rem;
}
</style>
