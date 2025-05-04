import './styles/main.css'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { Galleria } from 'primevue'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Dialog } from 'primevue'

library.add(faUserSecret, faGithub, faArrowLeft)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Galleria', Galleria)
  .component('Dialog', Dialog)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#app')
