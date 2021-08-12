<template>
  <button :class="['button', size]" @click="$emit('click')" :type="buttonType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default: "",
    },
    buttonType: {
      type: String,
      default: "submit",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem;
  font-size: 0.9rem;
  border: 1px solid var(--active-color);
  background-color: var(--active-color);
  color: var(--primary-text-color-inversion);
  border-radius: 4px;
  padding: 0.6rem;
  box-sizing: border-box;
  font-family: inherit;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;
  &.fullwidth {
    width: 100%;
  }
  &:hover,
  &:focus {
    color: var(--primary-text-color);
    background-color: var(--active-color-transparent);
  }
}
</style>
