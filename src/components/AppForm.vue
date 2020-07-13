<template>
  <div>
    <form class="form" @submit.prevent="onAddTodo">
      <input type="text" class="form__input" name="name" v-model="todo" />
      <app-button class="form__button">ADD TODO</app-button>
    </form>
    <app-button v-show="todoStatus" @click="onClear" class="button button__margined">CLEAR ALL</app-button>
  </div>
</template>
<script>
export default {
  name: "AppForm",
  data() {
    return {
      todo: ""
      // status: this.todoStatus
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
  background-color: $footer-black;
  display: flex;
  padding: 24px;
  &__input {
    min-height: 32px;
    margin-right: 24px;
    flex: 1 1;
    border-radius: 5px;
    border: 3px solid $main-color;
    padding: 0 12px;
    @include font(sans-serif, 16px, 500, $footer-black);
  }
}
.button {
  &__margined {
    margin-top: 30px;
  }
}
</style>