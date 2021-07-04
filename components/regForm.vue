<template>
  <form>
    <v-text-field
      v-model="firstName"
      :error-messages="firstNameErrors"
      :counter="10"
      label="First Name"
      required
      @input="$v.firstName.$touch()"
      @blur="$v.firstName.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      :error-messages="lastNameErrors"
      :counter="16"
      label="Last Name"
      required
      @input="$v.lastName.$touch()"
      @blur="$v.lastName.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      label="Phone"
      required
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    <v-select
      v-model="gender"
      :items="items"
      :error-messages="selectErrors"
      label="Gender"
      required
      @change="$v.gender.$touch()"
      @blur="$v.gender.$touch()"
    ></v-select>
    <div>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Birthday date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            :error-messages="dateErrors"
            required
            @change="$v.date.$touch()"
            @blur="$v.date.$touch()"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          :active-picker.sync="activePicker"
          :max="
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10)
          "
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </div>

    <v-checkbox
      v-model="TermsOfServiceAndPrivacyPolicy"
      color="deep-purple"
      :error-messages="checkboxErrors"
      required
      @change="$v.TermsOfServiceAndPrivacyPolicy.$touch()"
      @blur="$v.TermsOfServiceAndPrivacyPolicy.$touch()"
    >
      <template v-slot:label>
        I agree to the&nbsp;
        <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
        &nbsp;and&nbsp;
        <a href="#" @click.stop.prevent="privacyPolicy = true">Privacy Policy</a
        >*
      </template>
    </v-checkbox>

    <v-btn class="mr-4 createAccountButton" color="primary" @click="submit">
      Create Account?
    </v-btn>

    <v-dialog v-model="privacyPolicy" absolute max-width="400" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Privacy Policy
        </v-card-title>
        <v-card-text>
          2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="(agreement = false), (privacyPolicy = false)">
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="(agreement = true), (privacyPolicy = false)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" absolute max-width="400" persistent>
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Terms of Service
        </v-card-title>
        <v-card-text>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            text
            @click="(TermsOfServiceAndPrivacyPolicy = false), (dialog = false)"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="(TermsOfServiceAndPrivacyPolicy = true), (dialog = false)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    firstName: { required, maxLength: maxLength(10), minLength: minLength(3) },
    lastName: { required, maxLength: maxLength(16), minLength: minLength(3) },
    middleName: { maxLength: maxLength(10), minLength: minLength(3) },
    phone: { required, maxLength: maxLength(10), minLength: minLength(10) },
    gender: { required },
    date: { required },
    TermsOfServiceAndPrivacyPolicy: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    TermsOfServiceAndPrivacyPolicy: false,
    dialog: false,
    privacyPolicy: false,
    firstName: "",
    lastName: "",
    phone: "",
    gender: null,
    items: ["Male", "Female"],
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.TermsOfServiceAndPrivacyPolicy.$dirty) return errors;
      !this.$v.TermsOfServiceAndPrivacyPolicy.checked &&
        errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.gender.$dirty) return errors;
      !this.$v.gender.required && errors.push("Gender is required");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required");
      return errors;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.maxLength &&
        errors.push("First name must be at most 10 characters long");
      !this.$v.firstName.minLength &&
        errors.push("The First name must be at least 3 characters long");
      !this.$v.firstName.required && errors.push("First name is required.");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.maxLength &&
        errors.push("Last name must be at most 16 characters long");
      !this.$v.lastName.minLength &&
        errors.push("The Last name must be at least 3 characters long");
      !this.$v.lastName.required && errors.push("Last name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("Phone must be at most 10 characters long");
      !this.$v.phone.minLength &&
        errors.push("The Phone must be at least 10 characters long");
      !this.$v.phone.required && errors.push("Phone is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.step++;
      if (!this.$v.$invalid) {
        this.$emit("personalInfo", {
          date: this.date,
          gender: this.gender,
          phone: this.phone,
          lastName: this.lastName,
          firstName: this.firstName,
          TermsOfServiceAndPrivacyPolicy: this.TermsOfServiceAndPrivacyPolicy,
        });
      }
    },
    save(date) {
      // method for date input
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style lang="scss" scoped>
.createAccountButton {
  margin: 15px 0 0 30%;
}
</style>