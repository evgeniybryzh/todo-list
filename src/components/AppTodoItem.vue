<template>
  <li class="todo-item">
    <div class="todo-item__row handle">
      <span class="todo-item__idx">{{ idx + 1 }}</span>
      <span class="todo-item__name">{{ todo.text }}</span>
      <span
        class="todo-item__status"
        :style="{ backgroundColor: getStatusColor }"
        >{{ getStatus }}</span
      >
    </div>
    <div class="todo-item__buttons">
      <app-button
        @click="onTodoRemove"
        size="small"
        type="danger"
        class="todo-item__action"
        >REMOVE</app-button
      >
      <app-button
        @click="onTodoDone"
        size="small"
        type="succes"
        class="todo-item__action"
        >DONE</app-button
      >
    </div>
  </li>
</template>
<script>
export default {
  name: "AppTodoItem",
  props: {
    idx: {
      type: Number,
      required: true,
    },
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getStatus() {
      return this.todo.done ? "Done" : "To do";
    },
    getStatusColor() {
      return this.todo.done ? "red" : "green";
    },
  },
  methods: {
    onTodoDone() {
      this.$emit("done", this.todo?.id);
    },
    onTodoRemove() {
      this.$emit("remove", this.todo?.id);
    },
  },
};
</script>
<style lang="scss">
.todo-item {
  @include flex-main(column, center, space-between);
  padding: 16px 15px;
  margin-bottom: 10px;
  background-color: rgba($color: #fff, $alpha: 0.5);
  cursor: move;
  border-radius: 10px;
  box-shadow: inset $dark 0 0 0 3px, inset #ffffff 0 0 0 6px,
    inset $dark 0 0 0 9px, inset #ffffff 0 0 0 8px;
  @include media-q($tablet-small) {
    @include flex-main(row, space-between, center);
    padding: 15px 15px;
    margin-bottom: 10px;
    background-color: rgba($color: #fff, $alpha: 0.3);
    cursor: move;
  }
  &__row {
    @include flex-main(row, space-between, center);
    align-items: center;
    flex-basis: auto;
    margin-right: 0px;
    margin-bottom: 5px;
    overflow: hidden;
    word-wrap: break-word;
    @include media-q($tablet-small) {
      @include flex-main(row, space-between, center);
      align-items: center;
      flex-basis: 100%;
      margin-right: 10px;
      overflow: hidden;
      margin-bottom: 0px;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-evenly;

    @include media-q($tablet-small) {
      display: flex;
      justify-content: flex-start;
    }
  }

  &__idx {
    font-weight: 700;
    margin-right: 5px;
    @include font(sans-serif, 30px, 600, $footer-black);
    width: 70px;
    height: 50px;
    @include flex-main(row, center, center);
    box-shadow: inset $dark 0 0 0 3px, inset #ffffff 0 0 0 6px,
      inset $dark 0 0 0 9px, inset #ffffff 0 0 0 8px;
    border-radius: 50%;
    @include media-q($tablet-small) {
      font-weight: 700;
      margin-right: 10px;
      @include font(sans-serif, 30px, 600, $footer-black);
      width: 60px;
      height: 60px;
      @include flex-main(row, center, center);
      box-shadow: inset $dark 0 0 0 3px, inset #ffffff 0 0 0 6px,
        inset $dark 0 0 0 9px, inset #ffffff 0 0 0 8px;
      border-radius: 50%;
    }
  }
  &__name {
    font-weight: 600;
    margin-right: 24px;
    overflow: hidden;
    flex-basis: 85%;
    text-align: start;
    @include font(sans-serif, 35px, 600, $footer-black);
  }
  &__action {
    padding: 2px 10px;
    cursor: pointer;
  }
  &__action:not(:last-of-type) {
    margin-right: 10px;
  }
  &__status {
    font-weight: 600;
    color: $white;
    padding: 2px 14px;
    border-radius: 5px;
    flex-basis: 30%;
    align-self: flex-start;
    @include media-q($tablet-small) {
      font-weight: 600;
      color: $white;
      padding: 3px 8px;
      border-radius: 5px;
      flex-basis: 10%;
      align-self: auto;
    }
  }
}
</style>
