<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Nikki - Nails
            account
          </span>
        </v-card-text>
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
            :counter="26"
            required
            v-model="password"
            :error-messages="passwordErrors"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            required
            v-model="confirmPassword"
            :error-messages="confirmPasswordErrors"
            @input="$v.confirmPassword.$touch()"
            @blur="$v.confirmPassword.$touch()"
          ></v-text-field>
          <!-- <div class="error" v-if="!$v.confirmPassword.sameAsPassword">Passwords must be identical.</div> -->
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <div class="personal-info-block">
          <regForm />
        </div>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Nikki - Nails
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        :disabled="step === 3"
        v-if="step !== 2"
        color="primary"
        depressed
        @click="confirmEmailAndPass"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";
import regForm from "../components/regForm.vue";
export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, maxLength: maxLength(26), minLength: minLength(8) },
    confirmPassword: {
      required,
      maxLength: maxLength(26),
      minLength: minLength(8),
      sameAsPassword: sameAs("password"),
    },
  },
  data: () => ({
    step: 1,
    email: "",
    password: "",
    confirmPassword: "",
    dialog: false,
    agreeCreatedAccount: false,
  }),
  methods: {
    submit() {
      this.$v.$touch();
      console.log(this.$v.$touch());
    },
    confirmEmailAndPass() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        return this.step++;
      }
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up and Create a password";
        case 2:
          return "Write you personal info";
        default:
          return "Account created";
      }
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be at most 26 characters long");
      !this.$v.password.minLength &&
        errors.push("The password must be at least 8 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.maxLength &&
        errors.push("confirmPasswordErrors must be at most 26 characters long");
      !this.$v.confirmPassword.minLength &&
        errors.push(
          "The confirmPasswordErrors must be at least 8 characters long"
        );
      !this.$v.confirmPassword.required &&
        errors.push("confirmPasswordErrors is required.");
      if (!this.$v.confirmPassword.sameAsPassword) {
        errors.push("Passwords must be identical.");
      }
      return errors;
    },
  },
};
</script>

<style scoped>
.personal-info-block {
  padding: 2rem;
}
</style>