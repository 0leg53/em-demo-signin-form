<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href"
    :target="target"
    tabindex="0"
    :class="['nav-item', classname]"
    role="link"
    rel="noopener noreferer nofollow"
  >
    <slot>Link</slot>
  </component>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    href: {
      type: String,
    },
    target: {
      type: String,
    },
    classname: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
a.nav-item {
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover,
  &:focus {
    background-color: var(--active-color-transparent);
  }
}
.nav-item {
  padding: 0.8rem 2rem;
  display: block;
  /* display: inline-block; */
  color: var(--primary-text-color);
  &.bold {
    font-weight: 700;
  }
}
</style>
