<template>
  <div>
    <input type="text" placeholder="请输入账户名"><br><br>
    <input type="password" placeholder="请输入密码">
  </div>
</template>

<script setup>
const validator = () => {
  return Math.random() > 0.5 ? true : false
}
defineExpose({
  validator
})
</script>

<style lang="scss" scoped>

</style>
