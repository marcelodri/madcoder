<template>
    <div id="hero" :style="{ backgroundPositionY: parallaxOffset + 'px' }" data-aos-duration="1000" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-5 pe-4">
                    <h1 class="text-2 tx-color-1" data-aos-duration="1500" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">{{ $t('title') }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      parallaxOffset: 0
    };
  },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     const scrollPosition = window.scrollY;
  //     // Ajusta la velocidad del parallax modificando el factor
  //     this.parallaxOffset = scrollPosition * 3;
  //   }
  // }
};
</script>

<style scoped lang="scss">

#hero {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(12, 13, 31, 1), rgba(12, 13, 31, 0)), /* Fondo de color (en este caso, un degradado semitransparente) */
    url('@/assets/images/madcoder-back.png') center center no-repeat; /* Imagen de fondo */
  background-size: cover;
  height: 100vh;
  min-height: 1190px;
  padding-top: 280px;
  //background-attachment: fixed; // Esto es clave para el efecto parallax

  @media (max-width: 1400px) {
    min-height: 800px;
  }

  @media (max-width: 768px) {
    min-height: 500px;
    padding-top: 190px;
    height: 90vh;
    background-size: contain;
    background-position-y: bottom!important;
  }
}
</style>