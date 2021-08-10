<template>
  <footer class="footer">
    <div class="container">
      <p>Just another demo page at github.</p>
      <p>For timetravelers: today is {{ todayDate.getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      todayDate: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  /* padding: 0.5rem 0; */
  font-size: 0.8rem;
  color: var(--secondary-text-color);
  p {
    margin: 0.5rem 0;
  }
}
</style>
