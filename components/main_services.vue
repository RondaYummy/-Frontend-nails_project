<template>
  <div class="service">
    <v-hover >
      <v-card :loading="loading" class="mx-auto my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="9"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ><v-card-title class="tittle_card">Cafe Badilico</v-card-title>
          <v-card-title class="tittle_card price_card">Badilico</v-card-title>
        </v-img>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.2"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Location, Salon Name</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-hover>
  </div>
</template>
<style lang="scss" scoped >
// @import './../assets/fonts/fonts'; // dont working!!!!!!!!!!!!!!!! //todo edit import
.service {
  margin: 0.5rem;
}
.tittle_card {
  display: flex;
  margin-top: 45%;
  justify-content: flex-start;
  font-size: 35.2px;
  line-height: 5px;
  color: #ffffff;
  text-shadow: 0 2px 2px rgb(0, 0, 0, 50%);
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-weight: 800;
}
.price_card {
  margin-top: 5%;
  font-weight: 300;
}
</style>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>