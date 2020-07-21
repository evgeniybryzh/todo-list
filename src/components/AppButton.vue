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
      default: "medium"
    },
    type: {
      type: String,
      default: "primary"
    }
  }
};
</script>
<style lang="scss">
.button {
  padding: 18px 25px;
  background-color: $dark;
  @include font(sans-serif, 16px, 600, $white);
  border: none;
  outline: none;
  transition: 0.3s ease all;
  border-radius: 10px;
  cursor: pointer;
  min-height: 32px;
  text-align: center;
  border: 3px solid $light;

  &:hover {
    background-color: $light;
    @include font(sans-serif, 16px, 600, $footer-color);
    border: 3px solid $dark;
  }
  &:active {
    background-color: $main-color;
    @include font(sans-serif, 16px, 600, $footer-black);
  }
  &.small {
    padding: 6px 20px;
    min-height: auto;
    @include media-q($tablet-small) {
      padding: 12px 20px;
      min-height: auto;
    }
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
