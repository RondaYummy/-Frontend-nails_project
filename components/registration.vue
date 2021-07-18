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
            autocomplete="email"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            @keydown.enter="confirmEmailAndPass"
            clearable
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Nikki - Nails
            account
          </span>
        </v-card-text>
        <v-card-text>
          <v-text-field
            label="Password"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :counter="26"
            required
            v-model="password"
            :error-messages="passwordErrors"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            @keydown.enter="confirmEmailAndPass"
            loading
            ><template v-slot:progress>
              <v-progress-linear
                :value="progress"
                :color="color"
                absolute
                height="7"
              ></v-progress-linear> </template
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            :type="show2 ? 'text' : 'password'"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            required
            v-model="confirmPassword"
            :error-messages="confirmPasswordErrors"
            @input="$v.confirmPassword.$touch()"
            @blur="$v.confirmPassword.$touch()"
            @keydown.enter="confirmEmailAndPass"
            clearable
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="back"> Back </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            :disabled="step === 3"
            v-if="step !== 3"
            color="primary"
            depressed
            @click="confirmEmailAndPass"
          >
            Next
          </v-btn>
        </v-card-actions>
      </v-window-item>

      <v-window-item :value="2">
        <div class="personal-info-block">
          <form>
            <v-text-field
              v-model="firstName"
              :error-messages="firstNameErrors"
              :counter="10"
              label="First Name"
              required
              @input="$v.firstName.$touch()"
              @blur="$v.firstName.$touch()"
              @click="confirmPersonalInfo"
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              :error-messages="lastNameErrors"
              :counter="16"
              label="Last Name"
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
              @click="confirmPersonalInfo"
            ></v-text-field>

            <VuePhoneNumberInput
              type="tel"
              autocomplete="tel"
              v-model="phone"
              @update="updatePhone"
              :error="phoneError"
              maxlength="15"
              default-country-code="UA"
              clearable
              required
            />
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
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
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
                <a href="#" @click.stop.prevent="dialog = true"
                  >Terms of Service</a
                >
                &nbsp;and&nbsp;
                <a href="#" @click.stop.prevent="privacyPolicy = true"
                  >Privacy Policy</a
                >*
              </template>
            </v-checkbox>

            <v-dialog
              v-model="privacyPolicy"
              absolute
              max-width="400"
              persistent
            >
              <v-card>
                <v-card-title class="text-h5 grey lighten-3">
                  Privacy Policy
                </v-card-title>
                <v-card-text>
                  2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    text
                    @click="
                      (TermsOfServiceAndPrivacyPolicy = false),
                        (privacyPolicy = false)
                    "
                  >
                    No
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="white--text"
                    color="deep-purple accent-4"
                    @click="
                      (TermsOfServiceAndPrivacyPolicy = true),
                        (privacyPolicy = false)
                    "
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
                  1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    text
                    @click="
                      (TermsOfServiceAndPrivacyPolicy = false), (dialog = false)
                    "
                  >
                    No
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="white--text"
                    color="deep-purple accent-4"
                    @click="
                      (TermsOfServiceAndPrivacyPolicy = true), (dialog = false)
                    "
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </form>
        </div>
        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            :disabled="step === 3"
            v-if="step !== 3"
            color="primary"
            depressed
            @click="confirmPersonalInfo"
          >
            Next
          </v-btn>
        </v-card-actions>
      </v-window-item>

      <v-window-item :value="3" :class="{ ifError: this.errorMessage.errors }">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Перевірте свої реєстраційні дані:
          </h3>
          <span class="text-h6 font-weight-light mb-2">
            <h3>Ім'я та прізвище:</h3>
            {{ firstName }} {{ lastName }}
          </span>
          <span class="text-h6 font-weight-light mb-2">
            <h3>E-mail:</h3>
            {{ email }}
          </span>
          <span class="text-h6 font-weight-light mb-2">
            <h3>Номер телефону:</h3>
            {{ phone }}
          </span>
          <span class="text-h6 font-weight-light mb-2"
            ><h3>Стать:</h3>
            <span v-if="gender === 'Male'">Чоловіча</span>
            <span v-if="gender === 'Female'">жіноча</span>
          </span>
          <span class="text-h6 font-weight-light mb-2">
            <h3>День народження:</h3>
            {{ date }}
          </span>
          <span class="text-h6 font-weight-light mb-2">
            <h4>
              Підтверджую політику конфіденційності та умови надання послуг
              даного ресурсу:
            </h4>
            <h1 v-if="TermsOfServiceAndPrivacyPolicy">Підтвердужю</h1>
            <h1 v-if="!TermsOfServiceAndPrivacyPolicy">Ні</h1>
          </span>

          <span class="text-caption grey--text">Thanks for signing up!</span>
          <h2
            class="errorMessage"
            v-if="this.errorMessage.errors === 'RegError'"
          >
            Такий користувач уже створений, перевірте введені дані!
          </h2>
        </div>
        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="back"> Back </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="submit"> Create Account? </v-btn>
        </v-card-actions>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>
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
import api from "../plugins/api";
import VuePhoneNumberInput from "vue-phone-number-input";
export default {
  components: {
    VuePhoneNumberInput,
  },
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
    firstName: { required, maxLength: maxLength(16), minLength: minLength(3) },
    lastName: { required, maxLength: maxLength(16), minLength: minLength(3) },
    gender: { required },
    date: { required },
    TermsOfServiceAndPrivacyPolicy: {
      checked(val) {
        return val;
      },
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  data: () => ({
    step: 1,
    email: "",
    password: "",
    confirmPassword: "",
    dialog: false,
    agreeCreatedAccount: false,
    userPersonalInfo: "",
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
    show1: false,
    show2: false,
    title: "Nikki - Nails | Registration",
    errorMessage: "",
    phoneError: true,
  }),

  methods: {
    updatePhone(e) {
      if (!e.isValid) {
        this.phoneError = true;
      }
      if (e.isValid) {
        this.phoneError = false;
      }
    },
    back() {
      this.step--;
      this.errorMessage = "";
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // do your submit logic here
        await api
          .register({
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            age: this.date,
            phone: this.phone,
            TermsOfServiceAndPrivacyPolicy: this.TermsOfServiceAndPrivacyPolicy,
          })
          .then(() => {
            api
              .login({
                email: this.email,
                password: this.password,
              })
              .then((response) => {
                this.errorMessage = "";
                this.$store.commit("user/add", response.data.user);
                this.$router.push("/");
              });
          })

          .catch((error) => {
            this.errorMessage = error.response.data || error.message;
          });
      }
    },
    confirmEmailAndPass() {
      this.$v.email.$touch();
      this.$v.password.$touch();
      this.$v.confirmPassword.$touch();

      if (
        this.$v.email.$invalid ||
        this.$v.password.$invalid ||
        this.$v.confirmPassword.$invalid
      ) {
        console.log("ERROR");
      } else {
        // do your submit logic here
        console.log("submit page: ", `${this.step}`);
        return this.step++;
      }
    },
    confirmPersonalInfo() {
      this.$v.firstName.$touch();
      this.$v.lastName.$touch();
      this.$v.date.$touch();
      this.$v.gender.$touch();
      this.$v.TermsOfServiceAndPrivacyPolicy.$touch();

      if (
        this.$v.firstName.$invalid ||
        this.$v.lastName.$invalid ||
        this.$v.date.$invalid ||
        this.$v.gender.$invalid ||
        this.phoneError ||
        this.$v.TermsOfServiceAndPrivacyPolicy.$invalid
      ) {
        console.log("ERROR");
      } else {
        // do your submit logic here
        console.log("submit page: ", `${this.step}`);
        return this.step++;
      }
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Дані для входу";
        case 2:
          return "Персональна інформація";
        default:
          return "Підтвердіть створення аккаунту";
      }
    },
    progress() {
      return Math.min(100, this.password.length * 6);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
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
        errors.push("Password must be at most 26 characters long");
      !this.$v.confirmPassword.minLength &&
        errors.push("The password must be at least 8 characters long");
      !this.$v.confirmPassword.required && errors.push("Password is required.");
      if (!this.$v.confirmPassword.sameAsPassword) {
        errors.push("Passwords must be identical.");
      }
      return errors;
    },
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
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "salon",
          name: "salon",
          content: "My custom salon",
        },
      ],
    };
  },
};
</script>

<style scoped>
.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
  margin-top: 1.2rem;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  margin-left: -5px;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
    0 0 8px rgb(102 175 233 / 60%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}
.input-group .form-control,
.input-group-addon,
.input-group-btn {
  display: table-cell;
}
/* phone */
.ifError {
  border: 1px solid red;
  box-shadow: inset 1em 0.2em 0.2em red;
}
.errorMessage {
  color: red;
  text-shadow: 0.5px 0.5px 0.5px black;
}
.personal-info-block {
  padding: 2rem;
}
</style>