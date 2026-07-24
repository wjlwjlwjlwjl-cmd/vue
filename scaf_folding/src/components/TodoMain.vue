<script setup>
// oxlint-disable vue/valid-define-emits
  const props = defineProps(['todoList'])
  const emit = defineEmits()
</script>
<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item, index in props.todoList">
        <div class="view">
          <input class="toggle" type="checkbox" @checked="emit('done', index)"/>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="emit('del', index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
