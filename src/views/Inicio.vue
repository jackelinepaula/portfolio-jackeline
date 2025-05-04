<script setup>
import Card from '@/components/Card/Card.vue'
import Header from '@/components/Header/Header.vue'
import { ref } from 'vue'
import CardEducation from '@/components/CardEducation/CardEducation.vue'
import { RouterLink, useRouter } from 'vue-router'
import { projects, imageProject } from '@/projects.js'
const modalVisivel = ref(false)
const router = useRouter()
</script>

<template>
  <Header />
  <section id="sobre" class="sectionAboutMe">
    <div style="width: 150px; height: auto; border-radius: 100%; overflow: hidden">
      <img src="https://avatars.githubusercontent.com/u/56116537?v=4" />
    </div>
    <h2>Jackeline Menezes</h2>
    <h4>Desenvolvedora de Software</h4>
    <div class="aboutMe">
      <p>
        Com criatividade e expertise técnica, traduzo problemas desafiadores em soluções eficazes e
        bem estruturadas.
        <br />
        Sempre <em>codando</em>, aprendendo e evoluindo.
      </p>
    </div>
  </section>
  <section id="jornada" class="sectionAcademic">
    <p class="titleSection">Jornada acadêmica</p>
    <div class="academicCards">
      <CardEducation
        title="Tecnólogo em Desenvolvimento de Software Multiplataforma"
        subtitle="Fatec Zona Leste"
        plus="08/2022 - 06/2025"
      />
      <CardEducation
        title="Técnico em Desenvolvimento de Sistemas"
        subtitle="Etec de Guaianazes"
        plus="02/2019 - 12/2021"
      />
    </div>
  </section>
  <section id="projetos" class="sectionProjects">
    <p class="titleSection">Projetos</p>
    <div class="projectsCard">
      <Card :cardInfo="projects[0]" id="0" :img="imageProject[0].src[2]" />
      <Card :cardInfo="projects[1]" id="1" :img="imageProject[1].src[0]" />
      <Card :cardInfo="projects[2]" id="2" :img="imageProject[2].src[4]" />
      <Card :cardInfo="projects[3]" id="3" :img="imageProject[3].src[0]" />
      <Card :cardInfo="projects[4]" id="4" :img="imageProject[4].src[0]" />
    </div>
  </section>
</template>

<style scoped>
.projectsCard {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.sectionHabilities {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sectionProjects,
.sectionAboutMe,
.sectionAcademic {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.aboutMe p {
  font-size: 1.2rem;
  font-family: 'Fira Mono';
  color: #dadada;
  text-align: center;
  margin-top: 1rem;
  border-top: 1px solid var(--purple);
  padding: 1rem;
  width: 100%;
  max-width: 700px;
}

.sectionAcademic {
  margin-top: 3rem;
}

.academicCards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  margin: auto;
}

.sectionAboutMe {
  align-items: center;
  padding: 4rem 0rem;
  margin-top: 1.8rem;
}

.sectionAboutMe h2 {
  font-size: 2rem;
  font-family: 'Fira Mono';
  font-weight: 500;
}

.sectionAboutMe h4 {
  font-size: 1.1rem;
  font-family: 'Fira Mono';
  color: var(--purple);
  top: 0;
}

.sectionProjects {
  margin-top: 3rem;
}

.titleSection {
  font-family: 'Fira Mono', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
}
</style>
