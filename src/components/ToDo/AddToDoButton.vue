<template>
  <div>
    <form class="d-flex justify-content-center align-items-center mb-4" @submit="addToDo">
      <div class="form-outline flex-fill">
        <input type="text" id="form3" class="form-control form-control-lg" v-model="title" name="title" />
      </div>
      <button type="submit" class="btn btn-primary btn-lg ms-2">Add New Task</button>
    </form>
  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddToDoButton',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addToDo(event){
      event.preventDefault();

      const newToDoObject = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }

      this.$emit("add-todo-event", newToDoObject);
      this.title= '';
    }
  }
}
</script>
