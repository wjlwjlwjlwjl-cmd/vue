<script setup>
import { ref, watch } from 'vue'
import './assets/style.css'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

const KEY = "TODOLIST_KEY"

const todoList = ref( JSON.parse(localStorage.getItem(KEY)) || [
  { id: 321, name: '学Vue组件通信', finished: false },
  { id: 127, name: '打王者', finished: true },
  { id: 666, name: '跑步1小时', finished: false }
])
const addItem = (content) => {
  let newItem = {
    id: Date.now(),
    name: content,
    finished: false
  }
  todoList.value.unshift(newItem)
}
const done = (index) => {
  todoList.value[index].finished = !todoList.value[index].finished
}

const del = (index) => {
  todoList.value.splice(index, 1);
}

const clearCompleted = () => {
  todoList.value.filter((item) => {
    return !item.finished
  })
}

watch(todoList, (newVal) => {
  localStorage.setItem(KEY, JSON.stringify(newVal))
}, {
  deep: true
})

</script>
<template>
  <section class="todoapp">
    <todo-header @addItem="addItem"/>
    <todo-main :todoList="todoList" @del="del" @done="done"/>
    <todo-footer :todoList="todoList" @clearCompleted="clearCompleted"/>
  </section>
</template>
