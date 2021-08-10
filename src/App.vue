<template>
  <Page>
    <SignInForm />
  </Page>
</template>

<script>
import Page from "./components/Page.vue";
import SignInForm from "./components/SignInForm/index.vue";
export default {
  name: "App",
  components: {
    Page,
    SignInForm,
  },
};
</script>

<style lang="scss"></style>
