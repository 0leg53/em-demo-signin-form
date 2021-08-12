<template>
  <div class="form-checkbox">
    <label :for="name">
      <input
        type="checkbox"
        :name="name"
        @change="updateInputValue"
        :id="name"
      />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    updateInputValue(e) {
      this.$emit("update:modelValue", e.target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-checkbox {
  margin: 1rem 0;
  label {
    cursor: pointer;
    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      &:not(:disabled):active + span::before {
        background-color: var(--active-color-transparent);
        border-color: var(--active-color-transparent);
      }
      &:focus + span::before {
        box-shadow: 0 0 0 3px var(--active-color-transparent);
      }
      &:focus:not(:checked) + span::before {
        border-color: var(--active-color-transparent);
      }
      &:checked + span::before {
        border-color: var(--active-color);
        background-color: var(--active-color);
      }
      &:checked + span::after {
        content: "";
        border-right: 2px solid var(--primary-text-color-inversion);
        border-bottom: 2px solid var(--primary-text-color-inversion);
        width: 0.25rem;
        height: 0.4rem;
        display: inline-block;
        position: absolute;
        z-index: 2;
        top: 0.23rem;
        left: 0.35rem;
        transform: rotate(40deg);
      }

      &:disabled + span::before {
        background-color: #35383a;
      }
    }
    span {
      display: inline-flex;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        z-index: 1;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid var(--active-color);
        border-radius: 4px;
        margin-right: 0.5rem;
        transition: background-color 0.2s ease;
      }
    }
  }
}
</style>
