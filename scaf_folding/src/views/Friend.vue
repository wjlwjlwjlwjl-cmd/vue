<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.query.id
const name = route.query.name
</script>
<template>
  <div class="friend">
    <p>朋友</p>
    <p>朋友</p>
    <p>朋友...</p>
    <p>Hello! {{ id }}, name: {{ name }}</p> <!--静态传参-->
  </div>
</template>
<style scoped></style>
