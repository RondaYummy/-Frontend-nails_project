<template>
  <main>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        <section class="main-section mainContainer">
          <h1 class="animated-word">NIKKI-ROOM</h1>

          <form>
            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Показати на карті</nuxt-link>
            </div>

            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Записатись</nuxt-link>
            </div>
          </form>

          <p class="gaslo_main gaslo_main__first">
            «{{ title }}» – персоналізований
            <span class="font-red">комплекс</span> послуг для ідеального образу
          </p>

          <p class="gaslo_main gaslo_main__two">
            З нами стильно, легко, вільно
            <span class="font-red">переконайся сам</span>
          </p>

          <p class="gaslo_main gaslo_main__three">
            Велика база
            <span class="font-red">салонів</span> краси та <span class="font-red">майстрів</span>
          </p>

          <p class="gaslo_main gaslo_main__for">
            Не знаєте що подарувати?
            <span class="font-red">Подаруйте</span> сертифікат на красу разом із
            «{{ title }}»
          </p>
        </section>

        <hr class="my-3" />
        <about-the-system />

        <div class="services__main_block">
          <h3 class="text_tittle">Станьте привабливіші</h3>
          <section class="main_services">
            <main_services />
            <main_services />
            <main_services />
            <main_services />
            <main_services />
            <main_services />
            <main_services />
            <main_services />
          </section>
          <v-btn
            class="btn btn-1"
            :loading="loading"
            :disabled="loading"
            width="180"
            height="50"
            @click="getMoreServices"
          >
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Знайти більше
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <gallery-main />
    <liked-the-system />
  </main>
</template>

<script>
import main_services from "../components/main_services.vue";
import aboutTheSystem from "../components/additional/aboutTheSystem.vue";
import likedTheSystem from "../components/additional/likedTheSystem.vue";
import galleryMain from "../components/additional/galleryMain.vue";

export default {
  components: {
    main_services,
    likedTheSystem,
    aboutTheSystem,
    galleryMain,
  },
  data: () => ({
    loading: false,
    title: "NIKKI - ROOM",
  }),
  methods: {
    getMoreServices() {
      this.loading = true;
      console.log("Get more services logic here...");
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

//colors button
$white: #ffffff;
$black: rgb(0, 0, 0);

//base styles

* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;
}
.font-red {
  color: red;
}
//default button
.btn {
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 180px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 600px) {
    margin: 0 1em 2em;
  }

  &:hover {
    text-decoration: none;
  }
}
.btn2:hover {
  color: white;
  background-color: red;
}
//button one
///////////////////////////////
.btn-1 {
  background: darken($white, 1.5%);
  font-weight: 100;

  svg {
    height: 50px;
    left: -10;
    position: absolute;
    top: -10;
    width: 180px;
  }

  rect {
    fill: none;
    stroke: $black;
    stroke-width: 2;

    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
    stroke-linecap: round;
  }
}

.btn-1:hover {
  background: rgba($white, 0);
  font-weight: 600;
  letter-spacing: 1px;

  rect {
    stroke-width: 2;
    stroke-dasharray: 25, 330;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
// end button
//button 2
///////////////////////////////
.btn-2 {
  background: darken($white, 1.5%);
  font-weight: 100;

  svg {
    height: 50px;
    left: -10;
    position: absolute;
    top: -10;
    width: 180px;
  }

  rect {
    fill: none;
    stroke: $white;
    stroke-width: 2;

    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
    stroke-linecap: round;
  }
}

.btn-2:hover {
  background: rgba($white, 0);
  font-weight: 600;
  letter-spacing: 1px;

  rect {
    stroke-width: 2;
    stroke-dasharray: 25, 330;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
// end button
.mainContainer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.animated-word {
  font-family: Helvetica;
  letter-spacing: 0.4em;
  font-weight: 600;
  font-size: 100px;
  text-align: center;
  text-transform: uppercase;
  color: #0d0d0e97;
  cursor: pointer;
  max-width: 600px;
  margin-top: 7rem;
  background-color: rgba(245, 245, 245, 0.6);
  margin-bottom: 20px;
  width: 100%;
  outline: 3px solid;
  outline-color: rgba(71, 126, 232, 0.5);
  outline-offset: 0.5rem;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  color: #32336b;
  outline-color: rgba(71, 126, 232, 0);
  text-shadow: 0 0 1px white;
  outline-offset: 300px;
}
// Black btn
.step__footer {
  display: flex;
  padding: 20px 0;
  filter: url(#goo);
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  margin-right: 1.3rem;
}
.black__btn {
  position: relative;
  z-index: 2;

  display: inline-block;
  min-width: 12.23em;
  padding: 1.18em 1.32em 1.03em;

  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;

  text-align: center;
  text-decoration: none;

  color: white;
  border: none;
  border-radius: 1em;
  background: #33bb60;
}

.black__btn:before,
.black__btn:after {
  position: absolute;
  z-index: -1;

  display: inline-block;
  width: 4.4em;
  height: 2.95em;

  content: "";
  transition: transform 0.3s ease;
  transform: scale(0);
  border-radius: 50%;
  // background: #3e3e3e; // чорний колір
  background: #33bb60;
}

.black__btn:before {
  top: -25%;
  left: 20%;
}

.black__btn:after {
  right: 20%;
  bottom: -25%;
}

.black__btn:hover:before,
.black__btn:hover:after {
  transform: none;
}
// End black BTN

.services__main_block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text_tittle {
  margin: 0 auto;
  border-bottom: 1px solid #000;
  text-align: center;
  margin-bottom: 3.5rem;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  width: 550px;
  font-size: 40px;
  font-weight: 400;
  color: #000;
  line-height: 60px;
}
.main_services {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.main-section {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 530px;
  position: relative;
  background-image: url("../assets/appearance.jpg");
  background-position-x: -3rem;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 7rem;
  z-index: 1;
  .gaslo_main {
    position: absolute;
    font-weight: bold;
    background-image: url("../assets/images/hr.svg");
    padding-left: 30px;
    width: 355px;
    height: 50px;
  }
  .gaslo_main__first {
    top: 5rem;
    left: 12rem;
    z-index: 20;
  }
  .gaslo_main__two {
    top: 12rem;
    width: 320px;
    left: 8rem;
    z-index: 20;
  }
  .gaslo_main__three {
    top: 19rem;
    left: 8rem;
    width: 320px;
    z-index: 20;
  }
  .gaslo_main__for {
    top: 26rem;
    left: 12rem;
    z-index: 20;
  }
  h1 {
    color: #454546;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    font-size: 56px;
    z-index: 10;
  }

  h1::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 2px;
    margin-left: -30%;
    background: #454546;
    transition-property: all;
    transition-duration: 0.7s;
  }

  h1:hover::after {
    width: 100%;
    margin-left: -50%;
  }

  form {
    display: flex;
  }
}
.main-section::after {
  content: "";
  bottom: 0;
  height: 75px;
  width: 100%;
  background: url("../assets/bg_footer.png") bottom center repeat-x;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 10;
}
</style>