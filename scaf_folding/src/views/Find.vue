<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const sid = route.params.sid

//编程式导航：通过 JS 代码实现跳转
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/my')
  }, 2000)
})
</script>
<template>
  <div class="find">
    <p>发现音乐</p>
    <p>发现音乐</p>
    <p>发现音乐 {{ sid }}</p>
  </div>
</template>
<style scoped></style>
