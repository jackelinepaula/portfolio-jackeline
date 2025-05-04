<script setup>
import Badge from '@/components/Badge/Badge.vue'
import Galeria from '@/components/Galeria/Galeria.vue'
import { imageProject, projects } from '@/projects.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
const infos = projects[id]

const images = imageProject[id].src.map((src) => ({
  itemImageSrc: src,
  thumbnailImageSrc: src,
  alt: imageProject[id].alt,
}))
</script>
<template>
  <RouterLink to="/" class="linkBack">
    <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
    Voltar aos projetos
  </RouterLink>
  <div class="containerDetails">
    <div class="left">
      <div class="infos">
        <div class="headerInfo">
          <p class="title">{{ infos.title }}</p>

          <div class="techInfo">
            <Badge v-for="badge in infos.badges" :title="badge" />
          </div>
        </div>

        <div class="middleInfo">
          <p>{{ infos.description }}</p>
          <p>
            {{ infos.moreInfo }}
          </p>

          <a :href="infos.linkGithub" class="link" target="_blank"
            ><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon> Acesse no github
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <p class="titleGalely">Imagens do projeto</p>
      <div class="galeria">
        <Galeria :images="images" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerDetails {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  margin: auto;
  margin-top: 1rem;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.topInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerInfo {
  display: flex;
  flex-direction: column;
}

.middleInfo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  text-align: justify;
}

.middleInfo p {
  font-size: 1.2rem;
}

.headerInfo .title {
  font-size: 2rem;
  font-weight: 500;
}

.techInfo {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.link {
  padding: 0.5rem;
  border-radius: 0.25rem;
  align-self: start;
  border: 0.1rem solid var(--gray);
  cursor: pointer;
  &:hover {
    background-color: #ffffff1f;
  }
}
.galeria {
  width: 100%;
  margin: auto;
  border-radius: 0.25rem;
  border: 0.1rem solid var(--gray);
  padding: 1rem;
}

.titleGalely {
  font-size: 1.2rem;
  font-family: 'Fira Mono', sans-serif;
  font-weight: 500;
  text-align: start;
}

.linkBack {
  padding: 2rem 0rem;

  &:hover {
    text-decoration: underline;
  }
}
</style>
