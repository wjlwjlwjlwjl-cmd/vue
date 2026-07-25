import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const TODO_TYPE = {
  ALL: 'all',
  UNFINISH: 'unfinish',
  FINISHED: 'finished',
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([
    { id: 1, text: 'Buy milk', finished: false },
    { id: 2, text: 'Buy eggs', finished: true },
    { id: 3, text: 'Buy bread', finished: false },
  ])

  const type = ref(TODO_TYPE.ALL)

  const isAll = computed(() => {
    return todos.value.every((item) => {
      return item.value === TODO_TYPE.ALL
    })
  })

  const unfinishedTodos = computed(() => {
    return todos.value.filter((item) => {
      return item.value === TODO_TYPE.UNFINISH
    })
  })

  const showTodos = computed(() => {
    switch(type.value){
      case TODO_TYPE.ALL:
        return todos.value
      case TODO_TYPE.FINISHED:
        return todos.value.filter(item => item.finished )
      case TODO_TYPE.UNFINISH:
        return todos.value.filter(item => !item.finished )
      default:
        console.warn("unknown todo type")
        return ""
    }
  })

  const addTodo = (content) => {
    const todoItem = {
      id: Date.now(),
      text: content,
      finished: false
    }
    todos.value.push(todoItem)
  }

  const delTodo = (index) => {
    todos.value.splice(index, 1);
  }

  const toggleTodo = (val) => {
    console.log(val)
    todos.value.forEach(item => {
      item.finished = val
    })
  }

  const clearTodo = () => {
    while(todos.value.length !== 0){
      todos.value.splice(0, 1)
    }
  }

  const setType = (selectType) => {
    type.value = selectType
  }

  return {
    todos,
    type,
    isAll,
    unfinishedTodos,
    showTodos,
    addTodo,
    delTodo,
    toggleTodo,
    clearTodo,
    setType,
  }
})
