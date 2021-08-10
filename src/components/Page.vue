<template>
  <div class="page">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header/index.vue";

import Footer from "./Footer/index.vue";

export default {
  name: "Page",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
