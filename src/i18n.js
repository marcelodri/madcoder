import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

const messages = {
    en: en,
    es: es
}

const i18n = createI18n({
    locale: 'es', // Idioma por defecto
    fallbackLocale: 'en', // Idioma alternativo
    messages
})

export default i18n
