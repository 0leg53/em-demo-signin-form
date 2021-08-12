<template>
  <Page>
    <RouterView />
  </Page>
</template>

<script>
import Cookies from "js-cookie";

import { USER_DATA_COOKIE_KEY } from "./helpers/constants.js";

import verifyUser from "./helpers/verifyUser";

import Page from "./components/Page.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  mounted() {
    const cookieData = Cookies.get(USER_DATA_COOKIE_KEY);
    if (cookieData) {
      verifyUser(JSON.parse(decodeURIComponent(cookieData))).then(
        (isUserValid) => {
          if (isUserValid) {
            this.$router.push("/user");
            return true;
          }
        }
      );
    }
    this.$router.push("/");
  },
  components: {
    Page,
    // SignInFormBlock,
    RouterView,
  },
};
</script>

<style lang="scss"></style>
