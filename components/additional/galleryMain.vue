<template>
  <section class="mainSection">
    <h3 class="text_tittle">останні роботи</h3>
    <v-row class="mainRow">
      <v-col
        v-for="n in 12"
        :key="n"
        class="d-flex child-flex main_block"
        cols="2"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 7 + 15}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 7 + 15}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainSection {
  padding: 2rem;
  margin-bottom: 3rem;
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
  .mainRow {
    display: flex;
    justify-content: center;
    align-items: center;
    .main_block {
      margin: -0.72rem;
    }
  }
}
</style>