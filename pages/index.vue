<template>
  <main>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="10">
        <section class="main-section">
          <h1>Nikki Nails</h1>

          <form>
            <v-btn
              color="accent"
              elevation="3"
              outlined
              plain
              raised
              rounded
              text
              x-large
              ><a href="#">Показати на карті</a></v-btn
            >
            <v-btn
              color="accent"
              elevation="3"
              outlined
              plain
              raised
              rounded
              text
              x-large
              ><a href="#">Записатись</a></v-btn
            >
          </form>
        </section>
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
  </main>
</template>

<script>
import main_services from "../components/main_services.vue";

export default {
  components: {
    main_services,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    getMoreServices() {
      this.loading = true;
      console.log("Get more services logic here...");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  height: 840px;
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
    button {
      width: 220px;
      padding: 12px;
      border: none;
      border-radius: 2px;
      background-color: #33bb60;
      margin: 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: whitesmoke;
        font-size: 16px;
      }
    }

    button:hover {
      background-color: #2ca354;
    }
  }
}
.main-section::after {
  content: "";
  bottom: 170px;
  left: 0;
  height: 150px;
  width: 100%;
  display: block;
  background: url("../assets/bg_footer.png") bottom center repeat-x;
  background-size: contain;
  position: absolute;
  z-index: 2;
}
</style>