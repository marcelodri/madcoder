<template>
    <menu id="menu" class="container" :class="{ 'scrolled': isScrolled }">
        <div class="row align-items-center">
            <div class="col-6">
                <a href="/">
                    <svg width="115" height="20" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00245397 19.9953V6.94305H2.96151L3.22627 8.47529C3.88575 7.39169 5.20716 6.5459 7.08262 6.5459C9.0635 6.5459 10.4388 7.52408 11.1253 9.02935C11.7847 7.52408 13.3194 6.5459 15.3003 6.5459C18.4702 6.5459 20.2157 8.44832 20.2157 11.4613V19.9953H17.0189V12.3071C17.0189 10.4317 16.0137 9.45348 14.4815 9.45348C12.9493 9.45348 11.7333 10.4586 11.7333 12.5989V19.9977H8.50944V12.2826C8.50944 10.4586 7.53125 9.4829 5.99901 9.4829C4.46677 9.4829 3.22383 10.488 3.22383 12.6013V20.0002H0L0.00245397 19.9953Z" fill="#3939FF"/><path d="M21.2157 15.9354C21.2157 13.5304 22.9588 12.0251 26.0502 11.7873L29.9605 11.4956V11.2038C29.9605 9.4338 28.9039 8.72038 27.2662 8.72038C25.3638 8.72038 24.3071 9.51224 24.3071 10.8876H21.5589C21.5589 8.06091 23.883 6.20996 27.4255 6.20996C30.9681 6.20996 33.1059 8.11239 33.1059 11.7309V19.6569H30.2792L30.0414 17.7275C29.4873 19.0759 27.7173 20.0001 25.6825 20.0001C22.9097 20.0001 21.2182 18.3894 21.2182 15.9305L21.2157 15.9354ZM29.9875 14.3762V13.6897L27.2662 13.9006C25.2584 14.0844 24.491 14.7464 24.491 15.803C24.491 16.992 25.2829 17.573 26.7367 17.573C28.7175 17.573 29.9875 16.384 29.9875 14.3762Z" fill="#3939FF"/><path d="M34.106 13.1822C34.106 9.11253 36.484 6.2074 40.4212 6.2074C42.2452 6.2074 43.8559 6.97475 44.6747 8.26919V0H47.8716V19.6568H44.9125L44.7017 17.622C43.9098 19.1272 42.2182 20 40.2374 20C36.4595 20 34.1084 17.2248 34.1084 13.1822H34.106ZM44.6478 13.0767C44.6478 10.7257 43.194 9.08801 40.9483 9.08801C38.7027 9.08801 37.3273 10.7526 37.3273 13.0767C37.3273 15.4008 38.7027 17.0409 40.9483 17.0409C43.194 17.0409 44.6478 15.4302 44.6478 13.0767Z" fill="#3939FF"/><path d="M55.3977 6.20703C58.9647 6.20703 61.3943 8.18791 61.7399 11.3333H58.5161C58.1459 9.85253 57.0623 9.08764 55.5301 9.08764C53.4683 9.08764 52.0954 10.6468 52.0954 13.1033C52.0954 15.5598 53.3629 17.092 55.4247 17.092C57.0353 17.092 58.1729 16.3002 58.5161 14.8734H61.7669C61.3697 17.9109 58.8348 19.9996 55.4247 19.9996C51.4604 19.9996 48.8716 17.2514 48.8716 13.1033C48.8716 8.95525 51.5414 6.20703 55.3977 6.20703Z" fill="#3939FF"/><path d="M69.7416 6.26172C73.7842 6.26172 76.7163 9.06142 76.7163 13.131C76.7163 17.2007 73.7842 20.0004 69.7416 20.0004C65.6989 20.0004 62.7668 17.2007 62.7668 13.131C62.7668 9.06142 65.6989 6.26172 69.7416 6.26172ZM69.7416 17.1198C71.9603 17.1198 73.4925 15.5091 73.4925 13.131C73.4925 10.753 71.9603 9.14233 69.7416 9.14233C67.5229 9.14233 65.9907 10.753 65.9907 13.131C65.9907 15.5091 67.5229 17.1198 69.7416 17.1198Z" fill="#3939FF"/><path d="M77.7163 13.1822C77.7163 9.11253 80.0943 6.2074 84.0316 6.2074C85.8556 6.2074 87.4662 6.97475 88.2851 8.26919V0H91.4819V19.6568H88.5229L88.312 17.622C87.5202 19.1272 85.8286 20 83.8477 20C80.0698 20 77.7188 17.2248 77.7188 13.1822H77.7163ZM88.2581 13.0767C88.2581 10.7257 86.8043 9.08801 84.5586 9.08801C82.313 9.08801 80.9377 10.7526 80.9377 13.0767C80.9377 15.4008 82.313 17.0409 84.5586 17.0409C86.8043 17.0409 88.2581 15.4302 88.2581 13.0767Z" fill="#3939FF"/><path d="M92.4819 13.1303C92.4819 9.03616 95.1517 6.20703 98.9811 6.20703C102.81 6.20703 105.375 8.82287 105.375 12.8925V13.8707L95.5464 13.8976C95.7842 16.1972 97.0002 17.3593 99.1404 17.3593C100.91 17.3593 102.073 16.6728 102.443 15.4299H105.429C104.875 18.2835 102.497 19.9996 99.0865 19.9996C95.2032 19.9996 92.4819 17.173 92.4819 13.1303ZM95.6273 11.8359H102.18C102.18 10.0389 100.94 8.84983 99.0105 8.84983C97.0811 8.84983 95.946 9.8795 95.6298 11.8359H95.6273Z" fill="#3939FF"/><path d="M114.619 9.87986H113.43C111.106 9.87986 109.653 11.1228 109.653 13.6577V20H106.429V6.97474H109.466L109.65 8.87716C110.204 7.58272 111.447 6.70996 113.19 6.70996C113.639 6.70996 114.087 6.7639 114.617 6.89383V9.87986H114.619Z" fill="#3939FF"/>
                    </svg>
                </a>
            </div>
            <div class="col-6">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <ul class="menu">
                            <li>
                                <a :class="{ active: currentSection === 'services' }" class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#services')" >{{ $t('menu_services') }}</a>
                            </li>
                            <li class="mx-3">
                                <a :class="{ active: currentSection === 'work' }"  class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#work')">{{ $t('menu_works') }}</a>
                            </li>
                            <li>
                                <a :class="{ active: currentSection === 'contact' }" class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#contact')">{{ $t('menu_contact') }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="menu">
                            <li>
                                <button v-if="$i18n.locale === 'en'" @click="switchLanguage('es')" class="btn tx-color-3 fw-bold">ES</button>
                            </li>
                            <li>
                                <button v-if="$i18n.locale === 'es'" @click="switchLanguage('en')" class="btn tx-color-3 fw-bold">EN</button>
                            </li>
                        </ul>
                    </div>
                    <!-- <span class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8994 6L0.899414 6L0.899414 4L26.8994 4V6Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8994 20H0.899414L0.899414 18H26.8994V20Z" fill="white"/>
                        </svg>
                    </span> -->
                    <div class="menu-movil">
                        <ul>
                            <li>
                                <a :class="{ active: currentSection === 'services' }" class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#services')" >{{ $t('menu_services') }}</a>
                            </li>
                            <li class="mx-3">
                                <a :class="{ active: currentSection === 'work' }"  class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#work')">{{ $t('menu_works') }}</a>
                            </li>
                            <li>
                                <a :class="{ active: currentSection === 'contact' }" class="tx-color-1 text-7" href="#" @click.prevent="$scrollTo('#contact')">{{ $t('menu_contact') }}</a>
                            </li>
                            <li v-if="$i18n.locale === 'en'">
                                <button @click="switchLanguage('es')" class="btn tx-color-3 fw-bold">ES</button>
                            </li>
                            <li v-if="$i18n.locale === 'es'"> 
                                <button @click="switchLanguage('en')" class="btn tx-color-3 fw-bold">EN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </menu>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false, // Para el menú hamburguesa
      currentSection: null, // Para saber qué sección está activa
      observer: null,
    };
  },
  mounted() {
    // Configura el Intersection Observer
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null, // Usa el viewport como root
      threshold: 0.5, // Actúa cuando el 50% del elemento es visible
    });

    // Observa cada sección
    document.querySelectorAll('.section').forEach((section) => {
      this.observer.observe(section);
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    // Limpia el Intersection Observer
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Cambia la clase solo cuando se vuelve completamente al top
      if (scrollTop === 0) {
        this.isScrolled = false;
      } else {
        this.isScrolled = true;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
    scrollTo(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
        }
      });
    }
  }
};
</script>
<style lang="scss">
    #menu {
        position: fixed;
        background: transparent;
        transition: 0.3s all;
        margin: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        z-index: 100;
        
        &.scrolled {
            background: rgba(11, 11, 21, 0.95);
            box-shadow: 10px -9px 10px rgba(255, 255, 255, 0.7);
        }

        .hamburger {
            display: none;
            cursor: pointer;
            span {
                display: block;
                width: 25px;
                height: 3px;
                background-color: black;
                margin: 5px;
                transition: all 0.3s ease-in-out;
            }
            &.is-active span {
                transform: rotate(45deg);
            }
        }

        .menu {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;

            &.is-active {
                display: block;
            }

            button {
                &:hover {
                    color: white
                }
                &:focus {
                    border: 1px solid transparent
                }
            }

            a {
                &:hover {
                    color: rgb(57, 57, 255);
                }
                &.active {
                    color: rgb(57, 57, 255);
                }
            }
        }

        .menu-movil {
            display: none;
            position: fixed;
            bottom: 0px;
            background: rgba(8, 8, 15, 0.9);
            width: 100%;
            left: 0;
            right: 0;
            padding: 15px 30px;

            ul {
                list-style: none;
                display: flex;
                margin: 0;
                padding: 0;
                justify-content: space-between;
                width: 100%;
                align-items: center;

                li {
                    flex: 1; /* Cada <li> ocupará el mismo ancho */
                    text-align: center; /* Centra el texto dentro de cada columna */
                }
                
            }


        }

        @media (max-width: 768px) {

            padding-top: 10px;
            padding-bottom: 20px;

            .menu {
                display: none;
                flex-direction: column;
            }

            .hamburger {
                display: block;
            }

            .menu-movil {
                display: flex;
            }

        }
    }
</style>
