<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-xl-6 offset-xl-6">
                    <h2 class="text-1 tx-color-1 fw-light" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0">{{ $t('ia_title') }}</h2>
                    <div class="subtitle">
                        <p class="text-6 tx-color-1 fw-light mt-60" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">{{ $t('ia_subtitle') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <SliderComponent :images="imageArray" />
    </div>
</template>

<script>
  import SliderComponent from '@/components/SliderComponent.vue';
  import image1 from '@/assets/images/ia/slider1.jpg';
  import image2 from '@/assets/images/ia/slider2.jpg';
  
  export default {
    components: {
      SliderComponent,
    },
    data() {
      return {
        imageArray: [{
          src: image1,
          name: 'audio',
          index: '01 of 02'
        }, 
        {
          src: image2,
          name: 'digital',
          index: '02 of 02'
        }]
      };
    },
  };
  </script>