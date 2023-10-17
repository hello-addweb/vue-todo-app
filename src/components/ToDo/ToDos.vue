<template>
  <div>
    <h2 class="text-left bold">Ongoing</h2>
    <template v-if="ongoingTasks.length > 0">
      <ul class="list-group mb-5">
        <li v-bind:key="item.id" v-for="item in ongoingTasks" class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
          <ToDoItem v-bind:todoItem="item" @delete-todo-event="$emit('delete-todo-event', item.id)" @complete-todo-event="$emit('complete-todo-event', item.id)"/>
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
          <ToDoItem v-bind:todoItem="item" @delete-todo-event="$emit('delete-todo-event', item.id)" @complete-todo-event="$emit('complete-todo-event', item.id)"/>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Push yourself and complete tasks!</p>
    </template>


  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: 'ToDos',
  components: {
    ToDoItem
  },
  computed: {
    completedTasks: function () {
      return this.$props.todoEntries.filter((task) => task.completed == true);
    },
    ongoingTasks: function () {
      return this.$props.todoEntries.filter((task) => task.completed == false);
    }
  },
  props: [
    "todoEntries"
  ]
}
</script>
<style>
.text-left {
  text-align: left;
}

.bold {
  font-weight: bold;
}
</style>
