<template>
  <main>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10">
        <section class="main-section mainContainer">
          <div class="d38"></div>
          <h1 class="animated-word">Nikki-Nails</h1>

          <form>
            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Показати на карті</nuxt-link>
            </div>

            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Записатись</nuxt-link>
            </div>
          </form>
        </section>
        <p>
          «Ніколи не забувайте про манікюр.Руки — перше, що кидається в очі
          після вашого лиця»
        </p>
        <div class="text-xs-right">
          <em><small>&mdash; Julia Restoin Roitfeld</small></em>
        </div>
        <a class="butn butn__new" href="#">
          <span>Мої Проекти</span>
        </a>
        <hr class="my-3" />
        <about-the-system />

        <div class="services__main_block">
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

    <!-- <card
      price="111"
      image="imagesss"
      description="Lorem reprehenderit perferendis, aspernatur, minus sapiente reiciendis doloremque vel blanditiis? Libero quos voluptatum totam reprehenderit nobis recusandae soluta!"
      name="Name card"
    /> -->
  </main>
</template>

<script>
import main_services from "../components/main_services.vue";
import aboutTheSystem from "../components/additional/aboutTheSystem.vue";

import card from "../components/card_createEdit.vue";
export default {
  components: {
    main_services,
    aboutTheSystem,
    card,
  },
  data: () => ({
    loading: false,
    title: "Nikki - Nails",
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
    stroke-dasharray: 15, 310;
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
  color: #0d0d0e97;
  cursor: pointer;
  max-width: 600px;
  margin-top: 20px;
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
// Start butn
.butn {
  position: relative;

  display: inline-flex;
  padding: 0.5rem 1rem;
  margin-right: 13px;
  overflow: hidden;

  transition: all 0.3s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #3e3e3e;
  background-image: linear-gradient(90deg, #3e3e3e, #3e3e3e);
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.butn::before {
  position: absolute;
  top: -50px;

  width: 50px;
  height: 155px;

  content: "";
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: rotate(35deg);

  opacity: 0;
  background: #fff;
}
.butn::after {
  position: absolute;
  top: -50px;

  width: 3rem;
  height: 10rem;

  content: "";
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: rotate(35deg);

  opacity: 0;
  background: #fff;
}
.butn__new::before {
  left: -50%;
}

.butn__new::after {
  left: -100%;
}

.butn:hover,
.butn:active {
  transform: translateY(-3px);

  color: #fff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
}

.butn__new:hover::before {
  left: 120%;

  opacity: 0.5s;
}

.butn__new:hover::after {
  left: 200%;

  opacity: 0.6;
}
.butn span {
  z-index: 20;
}
// End butn

// Black btn
.step__footer {
  display: flex;
  padding: 20px 0;
  filter: url(#goo);
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
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
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 7rem;

  h1 {
    color: #454546;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    font-size: 56px;
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
    // margin-bottom: 5rem;
  }
}
.main-section::after {
  content: "";
  bottom: 0;
  height: 65px;
  width: 100%;
  background: url("../assets/bg_footer.png") bottom center repeat-x;
  background-size: contain;
  position: absolute;
  z-index: 1;
}

// листочок початок LOGO
.d38 {
  width: 2.5em;
  height: 2.5em;
  margin: 2em 4.5em 4em;
  border-radius: 100% 0;
  background: #32336b;
  box-shadow: -3em 3em #32336b;
  position: relative;
  left: 2em;
}
.d38:before,
.d38:after {
  content: "";
  width: 2.5em;
  height: 2.5em;
  margin: 1em 3em;
  border-radius: 0 100%;
  background: #32336b;
  position: absolute;
  left: -6em;
  top: -1em;
  box-shadow: 3em 3em #32336b;
  transform-origin: 2.75em 2.75em;
}
.d38:before {
  transform: rotate(-30deg);
}
.d38:after {
  transform: rotate(30deg);
}
// Листочок кінець
</style>