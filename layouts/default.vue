<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app>
      <a href="/" class="tittle"><v-toolbar-title v-text="title" /></a>
      <v-row justify="flex-start">
        <authComponent />
        <a href="/registration">
          <v-chip class="ma-2" color="primary" outlined pill>
            Registration
            <v-icon right> mdi-account-outline </v-icon>
          </v-chip></a
        >

        <v-chip class="ma-2" color="indigo darken-3" outlined>
          <v-icon left> mdi-fire </v-icon>
          Тут буде якась хуйня
        </v-chip>
      </v-row>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy;2021 &mdash; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import authComponent from "../components/authorization.vue";

export default {
  components: {
    authComponent,
  },
  data() {
    return {
      title: "Nikki - Nails",
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  text-decoration: none;
}
.tittle {
  margin-right: 2rem;
}
.listItem {
  width: 50px;
  height: 10px;
  display: flex;
}
</style>