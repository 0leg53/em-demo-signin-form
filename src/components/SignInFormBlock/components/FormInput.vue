<template>
  <div class="form-input">
    <label class="form-input__label" :for="inputName">{{ labelText }}</label>
    <input
      :type="inputType"
      :name="inputName"
      :id="inputName"
      :placeholder="placeholder"
      :required="required ? 'required' : ''"
      :class="['form-input__field', className]"
      :maxlength="maxLength"
      @input="updateInputValue"
      tabindex="0"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    modelValue: {
      type: String,
    },
    labelText: {
      type: String,
    },
    inputName: {
      type: String,
    },
    inputType: {
      type: String,
      default: "text",
    },
    maxLength: {
      type: Number,
      default: 128,
    },
    required: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  emits: ["update:modelValue"],

  data() {
    return {};
  },
  methods: {
    updateInputValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  margin-bottom: 1rem;
  &__label {
    display: block;
    margin-bottom: 0.5rem;
  }
  &__field {
    width: 100%;
    font-size: 0.9rem;
    border: 1px solid var(--active-color);
    background-color: var(--page-background);
    border-radius: 4px;
    padding: 0.6rem;
    box-sizing: border-box;
    color: var(--primary-text-color);
    font-family: inherit;
  }
}
</style>
