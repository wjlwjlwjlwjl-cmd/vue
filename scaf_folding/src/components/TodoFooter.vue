<script setup>
// oxlint-disable vue/valid-define-props vue/valid-define-emits
const props = defineProps(['todoList'])
const emit = defineEmits()
</script>
<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todoList.length }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="emit('clearCompleted')">
      Clear completed
    </button>
  </footer>
</template>
