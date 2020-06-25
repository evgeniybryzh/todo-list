<template>
  <header class="header">
    <h1 class="header__title">TODO APP</h1>
  </header>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>
<style lang="scss">
.header {
  background-color: $footer-black;
  padding: 32px 24px;
  @include flex-main;
  &__title {
    @include font(sans-serif, 50px, 500, $main-color);
  }
}
</style>