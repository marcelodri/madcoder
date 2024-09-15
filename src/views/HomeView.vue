<script setup>
  import Header from '@/components/header.vue'
  import Footer from '@/components/Footer.vue'
  import Linea from '@/components/Linea.vue'
  import SectionDesigne from '@/components/SectionDesigne.vue'
  import SectionAutomatization from '@/components/SectionAutomatization.vue'
  import SectionIA from '@/components/SectionIA.vue'
  import SectionIOT from '@/components/SectionIOT.vue'
  import Contact from '@/components/Contact.vue'
  import Preloader from '@/components/Preloader.vue'
</script>

<template>
  <main>
    <Preloader />
    <Header />
    <Linea />
    <SectionDesigne />
    <Linea />
    <SectionAutomatization />
    <Linea />
    <SectionIA />
    <Linea />
    <SectionIOT />
    <Contact />
    <Footer />
  </main>
</template>

