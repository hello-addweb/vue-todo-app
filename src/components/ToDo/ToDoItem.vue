<script setup>

import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['complete-todo-event', 'delete-todo-event'])
const completeToDo = val => {
  emit('complete-todo-event', val)
}

const deleteTodo = val => {
  emit('delete-todo-event', val)
}

const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  }
})

</script>
<template>

  <div class="row w-100">
    <div class="col-10 d-flex align-items-center">
      <input class="form-check-input me-3 mt-0" type="checkbox" aria-label="..." :checked="props.todoItem.completed" @input="completeToDo(props.todoItem.id)">
      {{ props.todoItem.title }} - {{props.todoItem.completed}}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger btn-sm float-right" @click="deleteTodo(props.todoItem.id)">Delete</button>
    </div>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
