<script setup>
import { computed, defineProps, defineEmits } from 'vue'

import ToDoItem from "/components/ToDoItem.vue";

const emit = defineEmits(['complete-todo-event', 'delete-todo-event'])
const completeToDo = val => {

  emit('complete-todo-event', val)
}

const deleteTodo = val => {
  emit('delete-todo-event', val)
}


const props = defineProps({
  todoEntries: {
    type: Object,
    required: true,
  }
})

const completedTasks = computed(() => {
  return props.todoEntries.filter((task) => task.completed == true)
})

const ongoingTasks = computed(() => {
  return props.todoEntries.filter((task) => task.completed == false)
})

</script>
<template>
  <div>
    <h2 class="text-left bold">Ongoing</h2>
    <template v-if="ongoingTasks.length > 0">
      <ul class="list-group mb-5">
        <li v-bind:key="item.id" v-for="item in ongoingTasks" class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <ToDoItem v-bind:todoItem="item" @complete-todo-event="completeToDo(item.id)" @delete-todo-event="deleteTodo(item.id)"/>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>All done, Great work!</p>
    </template>


    <h2 class="text-left bold">Completed</h2>

    <template v-if="completedTasks.length > 0">
      <ul class="list-group mb-0">
        <li v-bind:key="item.id" v-for="item in completedTasks" class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <ToDoItem v-bind:todoItem="item" @complete-todo-event="completeToDo(item.id)" @delete-todo-event="deleteTodo(item.id)" />
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Push yourself and complete tasks!</p>
    </template>


  </div>
</template>


<style>
.text-left {
  text-align: left;
}

.bold {
  font-weight: bold;
}
</style>
