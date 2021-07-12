<template>
  <v-app light>
    <v-app-bar fixed app height="80px">
      <nuxt-link to="/" class="tittle"
        ><v-toolbar-title v-text="title"
      /></nuxt-link>
      <v-row>
        <authComponent />
        <nuxt-link to="/registration">
          <v-chip class="ma-2" color="primary" outlined pill>
            Registration
            <v-icon right> mdi-account-outline </v-icon>
          </v-chip></nuxt-link
        >
        <nuxt-link to="/salon">
          <v-chip class="ma-2" color="indigo darken-3" outlined>
            <v-icon left> mdi-fire </v-icon>
            Salon
            <h5 color="primary">[ * ]</h5>
          </v-chip></nuxt-link
        >
      </v-row>

      <v-spacer />
      <v-badge
        :content="messages"
        :value="messages"
        color="green"
        overlap
        class="awatar_main"
        v-if="loginIn"
      >
        <v-row justify="center">
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="48">
                  <span class="white--text text-h5"
                    >{{ user.firstName[0] }}{{ user.lastName[0] }}</span
                  >
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center" v-if="user">
                  <v-avatar color="brown">
                    <span class="white--text text-h5"
                      >{{ user.firstName[0] }}{{ user.lastName[0] }}</span
                    >
                  </v-avatar>
                  <h3>{{ user.firstName }} {{ user.lastName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text @click="getUser">
                    Edit Account
                  </v-btn>
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
      <span>
        <span>«Nikki - Nails»</span> – персоналізований комплекс послуг для
        ідеального образу</span
      >
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
      snackbar: false,
      disconnectText: "You are logged out.",
      timeout: 2000,
      loginIn: false,
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user.user;
    },
  },
  watch: {
    user: function () {
      this.loginIn = true;
    },
  },
  methods: {
    async logout() {
      await api.logout({ userId: this.$store.state.user._id });
      this.snackbar = true;
      this.$router.push(`/`);
      console.log("Disconeting...");
    },
    getUser() {
      console.log("UserStore", this.$store.state.user.user);
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