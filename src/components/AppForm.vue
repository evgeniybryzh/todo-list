<template>
  <div>
    <form class="form" @submit.prevent="onAddTodo">
      <input autocomplete="off" type="text" class="form__input" name="name" v-model="todo" />
      <app-button class="form__button">ADD TODO</app-button>
    </form>
    <transition name="fade">
      <app-button v-show="todoStatus" @click="onClear" class="button button__margined">CLEAR ALL</app-button>
    </transition>
  </div>
</template>
<script>
export default {
  name: "AppForm",
  data() {
    return {
      todo: ""
    };
  },

  methods: {
    onAddTodo() {
      const todo = {
        id: Date.now(),
        text: this.todo,
        done: false
      };
      this.$emit("add-todo", todo);
      this.todo = "";
    }
  },
  props: {
    onClear: {},
    todoStatus: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
.form {
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  flex-direction: column;
  padding: 5px;
  @include media-q($tablet-small) {
    background-color: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    padding: 24px;
    flex-direction: row;
  }

  &__input {
    min-height: 62px;
    margin-right: 0px;
    margin-bottom: 10px;
    flex: 1 1;
    border-radius: 10px;
    border: 3px solid $light;
    padding: 0 12px;
    background-color: rgba($color: #fff, $alpha: 0.5);
    @include font(sans-serif, 26px, 500, $footer-black);
    @include media-q($tablet-small) {
      min-height: 32px;
      margin-right: 24px;
      flex: 1 1;
      border-radius: 10px;
      border: 3px solid $light;
      padding: 0 12px;
      @include font(sans-serif, 26px, 600, $footer-black);
      margin-bottom: 0px;
    }
  }
}
.button {
  &__margined {
    margin-top: 25px;
  }
}
</style>
