<template>
  <Page>
    <SignInFormBlock />
  </Page>
</template>

<script>
import Page from "./components/Page.vue";
import SignInFormBlock from "./components/SignInFormBlock/index.vue";
export default {
  name: "App",
  components: {
    Page,
    SignInFormBlock,
  },
};
</script>

<style lang="scss"></style>
