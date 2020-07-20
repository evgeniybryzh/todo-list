<template>
  <header class="header">
    <h1 class="header__title">TODO APP</h1>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss">
.header {
  background-color: rgba($color: #000000, $alpha: 0.5);
  padding: 32px 24px;
  @include flex-main;
  box-shadow: inset $main-color 0 0 0 3px, inset $dark 0 0 0 6px,
    inset $main-color 0 0 0 9px, inset $dark 0 0 0 8px;
  &__title {
    @include font(sans-serif, 50px, 600, $main-color);
  }
}
</style>
