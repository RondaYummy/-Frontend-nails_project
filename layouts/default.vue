<template>
  <v-app light>
    <v-app-bar fixed app height="80px">
      <a href="/" class="tittle"><v-toolbar-title v-text="title" /></a>
      <v-row>
        <authComponent />
        <a href="/registration">
          <v-chip class="ma-2" color="primary" outlined pill>
            Registration
            <v-icon right> mdi-account-outline </v-icon>
          </v-chip></a
        >
        <a href="/salon">
          <v-chip class="ma-2" color="indigo darken-3" outlined>
            <v-icon left> mdi-fire </v-icon>
            Salon
            <h5 color="primary">[ * ]</h5>
          </v-chip></a
        >
      </v-row>

      <v-spacer />
      <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
        class="awatar_main"
      >
        <v-row justify="center">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="48">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="white--text text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text @click="logout(user._id)">
                    Disconnect
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-row>
      </v-badge>
    </v-app-bar>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ disconnectText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-main>
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy;2021 &mdash; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import authComponent from "../components/authorization.vue";
import api from "../plugins/api";

export default {
  components: {
    authComponent,
  },
  data() {
    return {
      fixed: false,
      title: "Nikki - Nails",
      messages: 66,
      show: false,
      user: {
        initials: "JD",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
      snackbar: false,
      disconnectText: "You are logged out.",
      timeout: 2000,
    };
  },
  methods: {
    async logout() {
      // userId не має ще
      await api.logout(this.$store.getters.getUser.userId);
      this.snackbar = true;
      this.$router.push(`/`);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  text-decoration: none;
}
.awatar_main {
  margin: 30px;
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