<template>
  <div>
    <router-link to="/my">我的主页</router-link><br><br>
    <router-link to="/friend?id=10086&name=wjl">好友</router-link><br><br> <!-- 查询参数传参，适合多个参数的情况，通过 route.query.参数名获取参数 -->
    <router-link to="/find/2918">发现</router-link><br><br> <!-- 动态路由传参，一般在只需要一个参数时使用，需要先通过 :参数名 的方式配置路由，然后直接在请求时将 url 的相应部分作为参数，通过 route.params.参数名 获取参数 -->

    <router-view /> <!-- 路由匹配的组件显示位置 -->
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
