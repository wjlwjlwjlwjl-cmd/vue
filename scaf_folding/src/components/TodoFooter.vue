<script setup>
import { useTodoStore, TODO_TYPE } from '@/store/todo.js'
const todoStore = useTodoStore()
</script>
<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todoStore.todos.length }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected" @click="todoStore.setType(TODO_TYPE.ALL)">All</a>
      </li>
      <li>
        <a href="#/active" @click="todoStore.setType(TODO_TYPE.UNFINISH)">Active</a>
      </li>
      <li>
        <a href="#/completed" @click="todoStore.setType(TODO_TYPE.FINISHED)">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todoStore.clearTodo">
      Clear completed
    </button>
  </footer>
</template>
