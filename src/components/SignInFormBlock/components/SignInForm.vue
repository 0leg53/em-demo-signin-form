<template>
  <form method="POST" @submit.prevent="onFormSubmit" class="sign-in-form">
    <Message
      messageType="error"
      v-for="(item, index) in errorList"
      :key="index"
      :content="item"
    />
    <FormInput
      v-model.trim="formData.username"
      :labelText="'Your username:'"
      :inputName="'username'"
      inputType="text"
      :required="true"
      :placeholder="'Please, fill in your username'"
    />
    <FormInput
      v-model.trim="formData.password"
      :labelText="'Your password:'"
      :inputName="'password'"
      inputType="password"
      :required="true"
      :placeholder="'Please, fill in your password'"
    />
    <Checkbox
      v-model="formData.remember"
      :label="'Remember me for 7 days'"
      :name="'remember-me'"
    />
    <Button buttonType="submit" size="fullwidth">Sign In</Button>
  </form>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

import base64Encoder from "../../../helpers/base64encode";
import findUserByToken from "../../../helpers/findUserByToken";

import {
  USER_DATA_COOKIE_KEY,
  USERS_DB_URL,
} from "../../../helpers/constants.js";

import FormInput from "./FormInput.vue";
import Button from "../../Button.vue";
import Checkbox from "./Checkbox.vue";
import Message from "./Message.vue";

export default {
  name: "SignInForm",
  data() {
    return {
      formData: {
        username: "",
        password: "",
        remember: false,
      },
      errorList: [],
    };
  },
  methods: {
    onFormSubmit() {
      const TOKEN = base64Encoder(
        this.formData.username,
        this.formData.password
      );
      this.errorList = [];
      axios.get(USERS_DB_URL).then((response) => {
        const USER = findUserByToken(response.data, TOKEN);
        if (!USER) {
          this.errorList.push("Invalid credentials. Please try again!");
          return false;
        }
        const userData = JSON.stringify(USER);
        Cookies.set(USER_DATA_COOKIE_KEY, userData, {
          expires: this.formData.remember ? 7 : 1,
        });
        this.$router.push("/user");
      });
    },
  },
  components: {
    FormInput,
    Button,
    Checkbox,
    Message,
  },
};
</script>

<style lang="scss" scoped>
.sign-in-form {
  margin: 2rem 0;
}
</style>
