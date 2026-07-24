<script setup>
// oxlint-disable vue/valid-define-emits
import { ref } from 'vue'

const content = ref('')
const emit = defineEmits()
const addItem = () => {
  emit('addItem', content.value)
  content.value = ''
}
</script>
<template>
    <header class="header">
        <h1>比特人的记事本</h1>
        <input v-model="content" @keydown.enter="addItem" class="new-todo" placeholder="What needs to be finished?" autofocus />
    </header>
</template>
