<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  cardInfo: {
    title: String,
    linkGithub: String,
  },
  img: {
    type: String,
  },
  id: {
    type: String,
  },
})
</script>
<template>
  <div class="card">
    <div class="cardContent">
      <div
        class="cardImage"
        style="border-radius: 0.25rem; margin-bottom: 1rem; overflow: hidden; max-height: 150px"
      >
        <img :src="img" style="width: 100%" />
      </div>
      <p class="cardTitle">{{ cardInfo.title }}</p>
    </div>
    <div class="cardFooter">
      <div class="footerContent">
        <RouterLink :to="`/detalhes/${id}`">Mais detalhes</RouterLink>
      </div>
      <div class="footerContent">
        <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'github']" />
        <a :href="cardInfo.linkGithub" target="_blank">Github</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 280px;
  padding: 1rem 1rem;
  border: 0.1rem solid var(--gray);
  border-radius: 0.25rem;
  background-color: var(--medium-gray);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.font-awesome-icon {
  font-size: 1.2rem;
}

.cardContent {
  display: flex;
  flex-direction: column;
}

.cardTitle {
  font-weight: 600;
  font-size: 1.2rem;
}

a {
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: var(--purple);
  }
}

.cardFooter {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 0.5rem;
}

.footerContent {
  display: flex;
  gap: 0.5rem;
}
</style>
