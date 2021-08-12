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
      :label="'Remember me for 1 day'"
      :name="'remember-me'"
    />
    <Button buttonType="submit">Sign In</Button>
  </form>
</template>

<script>
import axios from "axios";

import base64Encoder from "../../../helpers/base64encode";

import FormInput from "./FormInput.vue";
import Button from "./Button.vue";
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
      axios.get("/usersDB.json").then((response) => {
        const USER = response.data.find((item) => {
          return item.token === TOKEN;
        });
        if (!USER) {
          this.errorList.push("Invalid credentials. Please try again!");
          return false;
        }
        console.log(USER);
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
