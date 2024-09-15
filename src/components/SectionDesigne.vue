<template>
    <div id="work" class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-6 offset-xl-6">
            <h2 class="text-1 tx-color-1 fw-light" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">{{ $t('designer_title') }}</h2>
            <div class="subtitle">
              <p class="text-6 tx-color-1 fw-light mt-60" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                {{ $t('designer_subtitle') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SliderComponent :images="imageArray" />
    </div>
  </template>
  
  <script>
  import SliderComponent from '@/components/SliderComponent.vue';
  import image1 from '@/assets/images/proyects/1/slider1.jpg';
  import image2 from '@/assets/images/proyects/1/slider2.jpg';
  import image3 from '@/assets/images/proyects/1/slider3.jpg';
  import image4 from '@/assets/images/proyects/1/slider4.jpg';
  import image5 from '@/assets/images/proyects/1/slider5.jpg';
  import image6 from '@/assets/images/proyects/1/slider6.jpg';
  import image7 from '@/assets/images/proyects/1/slider7.png';
  import image8 from '@/assets/images/proyects/1/slider8.png';
  import image9 from '@/assets/images/proyects/1/slider9.jpg';
  import image10 from '@/assets/images/proyects/1/slider10.jpg';
  import image11 from '@/assets/images/proyects/1/slider11.jpg';
  import image12 from '@/assets/images/proyects/1/slider12.jpg';
  import image13 from '@/assets/images/proyects/1/slider13.jpg';
  
  export default {
    components: {
      SliderComponent,
    },
    data() {
      return {
        imageArray: [
          {
            src: image1,
            name: 'alter5',
            index: '01 of 02'
          }, 
          {
            src: image2,
            name: 'alter5',
            index: '02 of 02'
          },
          {
            src: image3,
            name: 'calviello',
            index: '01 of 02'
          },
          {
            src: image4,
            name: 'calviello',
            index: '02 of 02'
          },
          {
            src: image5,
            name: 'ultraquartz',
            index: '01 of 02'
          },
          {
            src: image6,
            name: 'ultraquartz',
            index: '02 of 02'
          },
          {
            src: image7,
            name: 'planalto',
            index: '01 of 03'
          },
          {
            src: image8,
            name: 'planalto',
            index: '02 of 03'
          },
          {
            src: image9,
            name: 'planalto',
            index: '03 of 03'
          },
          {
            src: image10,
            name: 'dolo',
            index: '01 of 02'
          },
          {
            src: image11,
            name: 'dolo',
            index: '02 of 02'
          },
          {
            src: image12,
            name: 'alter_dash',
            index: '01 of 02'
          },
          {
            src: image13,
            name: 'alter_dash',
            index: '02 of 02'
          }
        ],
      };
    },
  };
  </script>
  