<script setup>
const imgList = [
  'https://img1.baidu.com/it/u=14492133,1259363498&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
  'https://img0.baidu.com/it/u=1764531212,1643995922&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500',
  'https://img1.baidu.com/it/u=3461494820,2726880132&fm=253&fmt=auto&app=138&f=JPEG?w=773&h=500',
  'https://img1.baidu.com/it/u=2991964469,2851730176&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  'https://img2.baidu.com/it/u=1519104236,3241953583&fm=253&fmt=auto&app=138&f=JPEG?w=781&h=500',
  'https://img0.baidu.com/it/u=3431675376,3243768390&fm=253&fmt=auto&app=138&f=JPEG?w=712&h=447',
  'https://img1.baidu.com/it/u=2111075854,406597938&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500',
  'https://img0.baidu.com/it/u=1615464091,2840643412&fm=253&fmt=auto?w=945&h=605',
  'https://img0.baidu.com/it/u=3926979850,631936366&fm=253&fmt=auto&app=120&f=JPEG?w=785&h=500',
  'https://img1.baidu.com/it/u=469866567,781924764&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
]

</script>
<template>
  <div class="container" v-for="item, index in imgList">
    <img v-lazyload="item" width="600" height="320" />
  </div>
</template>
<style lang="scss">
* {
  margin: 0;
}

.container {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
