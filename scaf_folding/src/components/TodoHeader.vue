<script setup>
import { useTodoStore } from '@/store/todo.js'
import { ref } from 'vue'

const todoStore = useTodoStore()

const content = ref('')
const addTodo = () => {
  todoStore.addTodo(content.value)
  content.value = ''
}

</script>
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be finished?" autofocus @keydown.enter="addTodo" v-model="content"/>
  </header>
</template>
