import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueScrollTo from 'vue-scrollto';

// Importar Bootstrap y Sass
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/scss/main.scss' // Si tienes estilos personalizados en Sass

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS

const app = createApp(App)

app.use(router)
app.use(i18n)
// Usar vue-scrollto
app.use(VueScrollTo, {
    duration: 1000,   // Duración en ms
    easing: "ease",  // Tipo de suavizado
    offset: -100  // Ajustar el desplazamiento si es necesario
});

app.mount('#app')

AOS.init();