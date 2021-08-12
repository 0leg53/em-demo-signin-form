<template>
  <form
    method="POST"
    action="/submit-form"
    @submit.prevent="onFormSubmit"
    class="sign-in-form"
  >
    <FormInput
      :labelText="'Your username:'"
      :inputName="'username'"
      inputType="text"
      :required="true"
      :placeholder="'Please, fill in your username'"
    />
    <FormInput
      :labelText="'Your password:'"
      :inputName="'password'"
      inputType="password"
      :required="true"
      :placeholder="'Please, fill in your password'"
    />
    <Checkbox
      :label="'Remember me for 1 day'"
      :name="'remember-me'"
      :defaultValue="true"
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
    return {};
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
