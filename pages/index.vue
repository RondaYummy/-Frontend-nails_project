<template>
  <main>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10">
        <section class="main-section">
          <div class="d38"></div>
          <h1>Nikki - Nails</h1>

          <form>
            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Показати на карті</nuxt-link>
            </div>

            <div class="step__footer">
              <nuxt-link class="black__btn" to="#">Записатись</nuxt-link>
            </div>
          </form>
        </section>
        <div>
          <a class="butn butn__new" href="#">
            <span>Мои проекты</span>
          </a>
        </div>
        <p>
          «Ніколи не забувайте про манікюр.Руки — перше, що кидається в очі
          після вашого лиця»
        </p>
        <div class="text-xs-right">
          <em><small>&mdash; Julia Restoin Roitfeld</small></em>
        </div>
        <hr class="my-3" />
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
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            outlined
            large
            width="200"
            @click="getMoreServices"
          >
            Знайти більше
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <card
      price="111"
      image="imagesss"
      description="Lorem reprehenderit perferendis, aspernatur, minus sapiente reiciendis doloremque vel blanditiis? Libero quos voluptatum totam reprehenderit nobis recusandae soluta!"
      name="Name card"
    />


    <about-the-system />
  </main>
</template>

<script>
import main_services from "../components/main_services.vue";
import aboutTheSystem from '../components/additional/aboutTheSystem.vue';
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
main {
  background-image: url("../assets/appearance.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.main-section {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  position: relative;

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
    margin-left: -52%;
  }

  form {
    display: flex;
  }
}
.main-section::after {
  content: "";
  bottom: 30px;
  left: 0;
  height: 65px;
  width: 100%;
  display: block;
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