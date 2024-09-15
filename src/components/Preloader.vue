<template>
    <div :class="{ 'preloader': true, 'fade-out': !showPreloader }">
      <div id="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPreloader: true,
        minLoadingTime: 1000, // Tiempo mínimo en milisegundos
        loadTimeStart: null,
      };
    },
    mounted() {
      this.loadTimeStart = Date.now();
      window.addEventListener('load', this.handlePageLoad);
    },
    beforeDestroy() {
      window.removeEventListener('load', this.handlePageLoad);
    },
    methods: {
      handlePageLoad() {
        const loadTimeEnd = Date.now();
        const timeSpent = loadTimeEnd - this.loadTimeStart;
        const timeToWait = Math.max(this.minLoadingTime - timeSpent, 0);
  
        setTimeout(() => {
          this.showPreloader = false;
        }, timeToWait);
      },
    },
  };
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(8, 8, 15, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out; /* Transición suave al ocultar */
  }
  
  .fade-out {
    opacity: 0;
    z-index: -1;
  }
  
  #loader {
    border: 5px solid rgba(255, 255, 255, 0.1); /* Fondo del spinner */
    border-radius: 50%;
    border-top: 5px solid rgba(57, 57, 255, 1); /* Color del spinner */
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  /* Animación del spinner */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  