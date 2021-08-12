<template>
  <div :class="['message-block', messageType]">{{ content }}</div>
</template>

<script>
export default {
  name: "Message",
  props: {
    messageType: {
      type: String,
      default: "notify",
    },
    content: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.message-block {
  width: 100%;
  background: #2a7abb;
  color: #fff;
  padding: 1rem;
  margin: 0.5rem 0 1rem;
  border-radius: 4px;
  box-sizing: border-box;
  &.error {
    background: #ea3559;
  }
}
</style>
