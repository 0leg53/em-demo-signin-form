<template>
  <form
    method="POST"
    action="/submit-form"
    @submit.prevent="onFormSubmit"
    class="sign-in-form"
  >
    <FormInput
      v-model.trim="formdata.username"
      :labelText="'Your username:'"
      :inputName="'username'"
      inputType="text"
      :required="true"
      :placeholder="'Please, fill in your username'"
    />
    <FormInput
      v-model.trim="formdata.password"
      :labelText="'Your password:'"
      :inputName="'password'"
      inputType="password"
      :required="true"
      :placeholder="'Please, fill in your password'"
    />
    <Checkbox
      v-model="formdata.remember"
      :label="'Remember me for 1 day'"
      :name="'remember-me'"
    />
    <Button buttonType="submit">Sign In</Button>
  </form>
</template>

<script>
import FormInput from "./FormInput.vue";
import Button from "./Button.vue";
import Checkbox from "./Checkbox.vue";
export default {
  name: "SignInForm",
  data() {
    return {
      formdata: {
        username: "",
        password: "",
        remember: false,
      },
    };
  },
  methods: {
    onFormSubmit() {
      console.log("asd");
    },
  },
  components: {
    FormInput,
    Button,
    Checkbox,
  },
};
</script>

<style lang="scss" scoped>
.sign-in-form {
  margin: 2rem 0;
}
</style>
