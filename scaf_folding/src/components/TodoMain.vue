<script setup>
import { useTodoStore } from '@/store/todo.js'
import { computed } from 'vue'
const todoStore = useTodoStore()
const all = computed({
  get(){
    return todoStore.isAll
  },
  set(val){
    todoStore.toggleTodo(val)
  }
})
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="all"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item, index in todoStore.showTodos" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.finished"/>
          <label>{{ item.text }}</label>
          <button class="destroy" @click="todoStore.delTodo(index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
