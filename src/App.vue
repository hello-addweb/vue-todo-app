<script setup>
import { ref } from 'vue'
import ToDos from "@/components/ToDo/ToDos.vue";
import AddToDoButton from "@/components/ToDo/AddToDoButton.vue";
import { v4 as uuidv4 } from 'uuid';


const todoEntries = ref([
  {
    id: uuidv4(),
    title: 'Task #1',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Task #2',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Task #3',
    completed: false
  },
]);

const deleteToDoItem = val => {
  todoEntries.value = todoEntries.value.filter(item => item.id !== val)
}

const addToDoItem = val => {
  todoEntries.value = [...todoEntries.value, val];
}

const completeToDoItem = val => {
  const selectedTaskIndex = (element) => element.id == val;
  const selected = todoEntries.value.findIndex(selectedTaskIndex);
  todoEntries.value[selected].completed = !todoEntries.value[selected].completed;
}

</script>
<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center h-100">
          <div class="col col-xl-10">

            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h1>My To-Do List</h1>
                <AddToDoButton @add-todo-event="addToDoItem"/>
                <ToDos v-bind:todoEntries="todoEntries" @delete-todo-event="deleteToDoItem" @complete-todo-event="completeToDoItem"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
