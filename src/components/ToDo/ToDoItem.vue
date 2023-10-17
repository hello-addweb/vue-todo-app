<template>

  <div class="row w-100">
    <div class="col-10 d-flex align-items-center">
      <input class="form-check-input me-3 mt-0" type="checkbox" aria-label="..." :checked="todoItem.completed" @input="$emit('complete-todo-event', todoItem.id)">
      {{ todoItem.title }} - {{todoItem.completed}}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger btn-sm float-right" @click="$emit('delete-todo-event', todoItem.id)">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToDoItem',
  components: {
  },
  props: [
    "todoItem"
  ]
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
