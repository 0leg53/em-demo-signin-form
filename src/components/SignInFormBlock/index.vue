<template>
  <div class="container">
    <div class="form-block">
      <h1 class="form-block__title">Sign in</h1>
      <p class="form-block__subtitle">Try <pre>user : pass</pre> credentials</p>
      <SignInForm />
    </div>
  </div>
</template>

<script>
import SignInForm from "./components/SignInForm.vue";
export default {
  name: "SignInFormBlock",
  data() {
    return {};
  },
  components: {
    SignInForm,
  },
};
</script>

<style lang="scss">
.form-block {
  max-width: 30rem;
  padding: 2rem 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 2px 4px 3px var(--active-color-transparent);
  color: var(--primary-text-color);
  &__title {
    color: inherit;
    margin: 0 0 1.3rem;
  }
  &__subtitle {
    color: var(--secondary-text-color);
    font-size: 1rem;
    margin: 0 0 1rem;
    pre {
      display: inline;
    }
  }
}
</style>
