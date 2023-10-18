<script setup>
import { ref, defineEmits } from 'vue'
import { v4 as uuidv4 } from 'uuid';

const title = ref('');

const emit = defineEmits(['add-todo-event'])

const addToDo = () => {
  const newToDoObject = {
    id: uuidv4(),
    title: title.value,
    completed: false
  }
  emit("add-todo-event", newToDoObject);
  title.value = '';
}

</script>
<template>
  <div>
    <form class="d-flex justify-content-center align-items-center mb-4" @submit.prevent="addToDo">
      <div class="form-outline flex-fill">
        <input type="text" id="form3" class="form-control form-control-lg" v-model="title" name="title" />
      </div>
      <button type="submit" class="btn btn-primary btn-lg ms-2">Add New Task</button>
    </form>
  </div>
</template>


