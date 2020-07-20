<template>
  <button @click="() => $emit('click')" class="button" :class="[size, type]">
    <slot />
  </button>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    size: {
      type: String,
      default: "medium",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>
<style lang="scss">
.button {
  padding: 18px 32px;
  background-color: $footer-black;
  @include font(sans-serif, 16px, 600, $main-color);
  border: none;
  outline: none;
  transition: 0.3s ease all;
  border-radius: 10px;
  cursor: pointer;
  min-height: 32px;
  text-align: center;
  border: 3px solid $main-color;
  &:hover {
    background-color: $main-color;
    @include font(sans-serif, 16px, 600, $dark);
  }
  &:active {
    background-color: $main-color;
    @include font(sans-serif, 16px, 600, $footer-black);
  }
  &.small {
    padding: 12px 12px;
    min-height: auto;
  }
  &.danger {
    background-color: $footer-red;
    border-color: $footer-black;
  }
  &.succes {
    background-color: green;
    border-color: $footer-black;
  }
}
</style>
