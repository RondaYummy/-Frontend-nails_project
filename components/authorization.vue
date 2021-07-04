<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-chip
          class="ma-2"
          color="success"
          outlined
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left> mdi-server-plus </v-icon>
          Authorization
        </v-chip>
      </template>
      <v-sheet class="text-center auth-main" height="500px">
        <p class="text-h6 font-weight-light mb-2">
          <span>
            <h3>«Nikki - Nails»</h3>
            – персоналізований комплекс послуг для ідеального образу</span
          >
        </p>

        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="my-3">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    clearable
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    clearable
                    :counter="26"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                outlined
                large
                @click="loader = 'loading'"
              >
                Авторизуватись
              </v-btn>
            </v-container>
          </v-form>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    email: "",
    password: "",
    loader: null,
    loading: false,
    emailRules: [
      (v) => !!v || "Потрібний E-mail",
      (v) => /.+@.+\..+/.test(v) || "E-mail пошта повинна бути дійсною",
    ],
    passwordRules: [
      (v) => !!v || "Потрібний пароль",
      (v) =>
        (v && v.length <= 26) || "Пароль повинен мати не більше 26 символів.",
      (v) => (v && v.length >= 8) || "Пароль повинен мати не менше 8 символів.",
    ],
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>

<style>
.auth-main {
  padding: 3rem;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>