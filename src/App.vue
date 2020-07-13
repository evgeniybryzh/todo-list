<template>
  <div id="app" class="app">
    <app-header />
    <app-form @add-todo="onAddTodo" :onClear="onClear" :todoStatus="findStatus()" />
    <app-list @remove="onTodoRemove" @done="onTodoDone" :todos="todos" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import AppList from "./components/AppList";
export default {
  name: "App",
  components: {
    AppHeader,
    AppForm,
    AppList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    onAddTodo(todo) {
      this.todos.push(todo);
    },
    onTodoRemove(id) {
      const idx = this.todos.findIndex(item => item.id === id);
      if (idx >= 0) this.todos.splice(idx, 1);
    },
    onTodoDone(id) {
      const { todos } = this;
      const idx = todos.findIndex(item => item.id === id);
      if (idx >= 0) {
        todos.splice(idx, 1, { ...todos[idx], done: true });
      }
    },
    onClear() {
      this.todos = [];
    },
    findStatus() {
      if (this.todos.length === 0) {
        return false;
      } else return true;
    }
  },
  updated() {
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  mounted() {
    this.todos = JSON.parse(localStorage.todos);
  }
};
</script>

<style lang="scss">
.app {
  text-align: center;
  margin: 0 auto;
}
</style>
