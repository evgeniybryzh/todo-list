<template>
  <draggable
    tag="ul"
    v-model="todos"
    group="people"
    @start="drag = true"
    @end="onEnd"
    :animation="300"
    class="list"
  >
    <transition-group
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      tag="ul"
    >
      <app-todo-item
        style="animation-duration: 0.5s"
        :idx="idx"
        :todo="item"
        class="list__item"
        v-for="(item, idx) in todos"
        :key="item.id"
        @done="onTodoDone"
        @remove="onTodoRemove"
      ></app-todo-item>
    </transition-group>
  </draggable>
</template>
<script>
import AppTodoItem from "./AppTodoItem.vue";
import draggable from "vuedraggable";
export default {
  name: "AppList",
  components: {
    AppTodoItem,
    draggable,
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    onTodoDone(id) {
      this.$emit("done", id);
    },
    onTodoRemove(id) {
      this.$emit("remove", id);
    },
    onEnd() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>
<style lang="scss">
.list {
  list-style-position: inside;
  padding: 24px;
  list-style: none;
}
</style>
