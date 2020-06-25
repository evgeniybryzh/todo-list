<template>
  <li class="todo-item">
    <div class="todo-item__row">
      <span class="todo-item__idx">{{idx+1}}</span>
      <span class="todo-item__name">{{todo.text}}</span>
      <span class="todo-item__status" :style="{backgroundColor:getStatusColor}">{{getStatus}}</span>
    </div>
    <div class="todo-item__buttons">
      <app-button @click="onTodoRemove" size="small" type="danger" class="todo-item__action">REMOVE</app-button>
      <app-button @click="onTodoDone" size="small" type="succes" class="todo-item__action">DONE</app-button>
    </div>
  </li>
</template>
<script>
export default {
  name: "AppTodoItem",
  props: {
    idx: {
      type: Number,
      required: true
    },
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    getStatus() {
      return this.todo.done ? "Done" : "To do";
    },
    getStatusColor() {
      return this.todo.done ? "red" : "green";
    }
  },
  methods: {
    onTodoDone() {
      this.$emit("done", this.todo?.id);
    },
    onTodoRemove() {
      this.$emit("remove", this.todo?.id);
    }
  }
};
</script>
<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  justify-content: space-between;
  border-bottom: 1px solid $footer-black;
  &__row {
    display: flex;
    align-items: center;
    flex: 1 1;
    text-align: start;
  }
  &__buttons {
    display: flex;
  }
  &__idx {
    font-weight: 700;
    margin-right: 24px;
  }
  &__name {
    font-weight: 700;
    margin-right: 24px;
    flex: 0 0 40%;
  }
  &__action {
    padding: 2px 10px;
    cursor: pointer;
  }
  &__action:not(:last-of-type) {
    margin-right: 5px;
  }
  &__status {
    font-weight: 600;
    color: $white;
    padding: 2px 8px;
    border-radius: 5px;
  }
}
</style>