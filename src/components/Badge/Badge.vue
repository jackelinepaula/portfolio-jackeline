<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Badge',
  },
})
</script>
<template>
  <div class="badge">
    <p>{{ title }}</p>
  </div>
</template>
<style>
.badge {
  background-color: var(--dark-gray);
  justify-self: start;
  border-radius: 0.25rem;
  border: 0.1rem solid var(--gray);
  padding: 0.1rem 0.5rem;
}
</style>
