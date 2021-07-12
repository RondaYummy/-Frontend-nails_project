<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" persistent inset>
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

      <v-sheet class="text-center auth-main" height="500px" @keydown.esc="close">
        <v-btn
          class="mt-6 mb-6 text-h6"
          elevation="2"
          plain
          rounded
          text
          color="error"
          @click="close"
        >
          CLOSE / ЗАКРИТИ
        </v-btn>

        <p class="text-h6 font-weight-light mb-2">
          <span>
            <h3>«Nikki - Nails»</h3>
            – персоналізований комплекс послуг для ідеального образу</span
          >
        </p>
        <v-alert text dense color="teal" icon="mdi-account-clock" border="left">
          Це необідно для того, щоб ви могли економити час при записі на прийом
          та получати приємні подарунки на ваш аккаунт.
        </v-alert>

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
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    @keydown.enter="signIn"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    :counter="26"
                    :rules="passwordRules"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    required
                    loading
                    @keydown.enter="signIn"
                    ><template v-slot:progress>
                      <v-progress-linear
                        :value="progress"
                        :color="color"
                        absolute
                        height="7"
                      ></v-progress-linear> </template
                  ></v-text-field>
                </v-col>
              </v-row>
              <h2
                class="errorMessage"
                v-if="this.errorMessage.message === 'AuthError'"
              >
                Перевірте будь ласка введені дані!
              </h2>
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                outlined
                large
                @click="signIn"
              >
                Авторизуватись
              </v-btn>
            </v-container>
          </v-form>
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-overlay :value="overlay"></v-overlay>
  </div>
</template>

<script>
import api from "../plugins/api";

import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, maxLength: maxLength(26), minLength: minLength(8) },
  },
  data: () => ({
    show1: false,
    sheet: false,
    overlay: false,
    email: "",
    password: "",
    loader: null,
    loading: false,
    errorMessage: "",
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
      this.loader = null;
    },
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
  },
  methods: {
    close() {
      this.sheet = !this.sheet;
      this.errorMessage = "";
      this.email = "";
      this.password = "";
      this.loading = false;
      this.overlay = false;
    },
    signIn() {
      this.loader = "loading";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.loader = "";
      } else {
        // do your submit logic here
        api
          .login({
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            this.sheet = false;
            this.loading = false;
            this.email = "";
            this.password = "";
            this.errorMessage = "";
            this.$store.commit("user/add", response.data.user);
          })
          .catch((error) => {
            this.errorMessage = error.response.data || error.message;
            this.loading = false;
          });
      }
    },
  },
  computed: {
    progress() {
      return Math.min(100, this.password.length * 6);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    },
  },
};
</script>

<style>
.errorMessage {
  color: red;
  text-shadow: 0.5px 0.5px 0.5px black;
}
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