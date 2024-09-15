<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :pagination="{ clickable: true }"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <div :class="'slide-image'" :style="{ background: 'url(' + image.src + ')'}" data-aos-duration="1000" data-aos="fade-zoom-in">
      </div>
      <div class="container" id="slide-data">
        <div class="row">
          <div class="col-12 col-xl-6 offset-xl-6 text-start">
            <div :class="'slide-data'">
              <!-- La clave de traducción se crea correctamente con backticks y los nombres -->
              <h2 class="text-3 tx-color-1 mt-xl-5 mb-0 fw-light">{{ $t(`slides.n_${image.name}`) }}</h2>
              <h5 class="text-6 tx-color-1 mt-xl-1 mb-xl-1 mb-0 fw-light">{{ $t(`slides.c_${image.name}`) }}</h5>
              <span class="text-6 fw-bold tx-color-1 ">{{ image.index }}</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="touchscreen"><img :src="Touchscreen" alt="Touchscreen"></div>
  </swiper>
</template>

  
  <script>
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import Touchscreen from '@/assets/images/touchscreen.png';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    setup(props) {

      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay ],
        images: props.images, // Use the images prop
        Touchscreen
      };
    },
  };
  </script>
  
  <style lang="scss" >
    .swiper {
    
      margin-top: 80px;
      margin-bottom: 40px;
    
      .swiper-slide {
        width: 100%;
        margin: 0;
        text-align: center;
        
        .slide-image {
          background-size: cover!important;
          background-position: center!important;
          background-repeat: no-repeat!important;
          height: 900px;

          @media (max-width: 768px) {
            background-size: contain!important;
            height: 240px;
          }

        }

        .slide-data {
          position: relative;
          color: rgba(245, 245, 245, 1);
        }

      }

      @media (max-width: 768px) {
        margin-bottom: 0px;
        margin-top: 0px;

      }

      .swiper-pagination {
        display: none;

        @media (max-width: 768px) {
          display: block;
          bottom: -5px;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 1)
        }

      }

      .touchscreen {
        width: 40px;
        float: right;
        margin-top: 100px;
        position: absolute;
        top: -40px;
        z-index: 100;
        right: 10px;
        display: none;
        img {width: 100%}

        @media (max-width: 768px) {
          display: block
        }

      }

    }
    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
      opacity: 0!important
    }
    
    .swiper-button-prev, .swiper-button-next {
      top: 88.5%!important;
      right: 100px;
      color: rgba(57, 57, 255, 1)!important;
      &:hover {
        color: rgba(255, 255, 255, 1)!important;
      }

      @media (max-width: 768px) {
        display: none;
        // right: 10px;
        // top: 70%!important;
        // &::after {
        //   font-size: 30px
        // }
      }
    }

    #slide-data {
      
      position: absolute;
      bottom: 0;
      padding-bottom: 40px;
      background: rgba(0, 0, 0, 0.5);

      .slide-data {
        padding: 20px 0px;

        @media (max-width: 768px) {
          text-align: center;
        }

      }

      @media (max-width: 768px) {
        position: relative;
        background: transparent;
        padding-bottom: 0px;
      }

    }

  </style>
  