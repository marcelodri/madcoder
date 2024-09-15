<template>
    <div>
        <Menu /> <!-- Aquí usas el componente Menu -->
        <Hero />
        <Sectionheader />
    </div>
</template>
  
<script>
    import Menu from './Menu.vue'; // Asegúrate de que la ruta sea correcta
    import Hero from './Hero.vue'; // Asegúrate de que la ruta sea correcta
    import Sectionheader from './Sectionheader.vue';
    
    export default {
        components: {
            Menu,
            Hero,
            Sectionheader
        },
    }
</script>
  