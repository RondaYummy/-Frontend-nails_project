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
          <v-text-field label="name@email.com" value=""></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Nikki - Nails
            account
          </span>
        </v-card-text>
        <v-card-text>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-text-field label="Confirm Password" type="password"></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <div class="personal-info-block">
          <form>
            <v-text-field
              v-model="fname"
              :error-messages="nameErrors"
              :counter="10"
              label="First Name"
              required
              @input="$v.fname.$touch()"
              @blur="$v.fname.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="lname"
              :error-messages="nameErrors"
              :counter="10"
              label="Last Name"
              required
              @input="$v.lname.$touch()"
              @blur="$v.lname.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="mname"
              :error-messages="nameErrors"
              :counter="10"
              label="Middle Name"
              @input="$v.mname.$touch()"
              @blur="$v.mname.$touch()"
            ></v-text-field>

            <v-text-field
              v-model="phoneNumber"
              :error-messages="phoneNumberErrors"
              :counter="10"
              label="Phone Numbere"
              @input="$v.phoneNumber.$touch()"
              @blur="$v.phoneNumber.$touch()"
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              :error-messages="selectErrors"
              label="Gender"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
          </form>

          <div class="birthday-item">
            <h4>Write you birthday!</h4>
            <v-row align="center">
              <v-date-picker
                v-model="date"
                full-width
                class="mt-4"
              ></v-date-picker>
            </v-row>
          </div>
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
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit"> submit </v-btn>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data: () => ({
    step: 1,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    fname: "",
    lname: "",
    mname: "",
    email: "",
    phoneNumber: "",
    select: null,
    items: ["Male", "Female"],
    checkbox: false,
  }),

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
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.fname.$dirty) return errors;
      !this.$v.fname.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.fname.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.fname = "";
      this.lname = "";
      this.mname = "";
      this.phoneNumber = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

<style scoped>
.personal-info-block {
  padding: 2rem;
}
</style>