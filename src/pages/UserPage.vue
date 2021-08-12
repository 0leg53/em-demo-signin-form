<template>
  <div>
    <div class="container">
      <p>Hello, user!</p>
      <Button buttonType="default" @click="logOut">Log out</Button>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

import Button from "../components/Button.vue";

import { USER_DATA_COOKIE_KEY } from "../helpers/constants";

export default {
  name: "UserPage",
  mounted() {
    const userData = Cookies.get(USER_DATA_COOKIE_KEY);
    if (!userData || userData.id) {
      this.$router.push("/");
      return false;
    }
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      Cookies.remove(USER_DATA_COOKIE_KEY);
      this.$router.push("/");
      return true;
    },
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
