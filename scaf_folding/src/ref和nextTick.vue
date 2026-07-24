<template>
  <div ref="divRef">
    这是一个 div 标签
  </div>
  <Login ref="loginRef"/>
  <button @click="validate">validate</button> <br><br>
  <button @click="increment" ref="numRef">{{ val }}</button>
</template>

<script setup>
import Login from './components/Login.vue'
import { onMounted, ref, nextTick } from 'vue'

//准备响应式数据
const divRef = ref(null)
const loginRef = ref(null)
const numRef = ref(null)
const val = ref(0)

//标签的 ref 属性绑定到响应式数据

//在组件挂在之后可以获取 DOM 元素，并进行操作
onMounted(() => {
  //divRef.value 获取对象实例
  console.log(divRef.value)
  divRef.value.style.color = 'red'
})

const validate = () => {
  //获取到对象实例后，既可以调用对象方法，也可以修改对象属性
  if(loginRef.value.validator()){
    window.confirm(true)
  }
  else{
    window.confirm(false)
  }
}

// Vue 当响应式数据发生改变时，对应的 DOM 组件并不会立刻更新，而是会放在一个队列中缓存，然后统一更新
// 如果想要获取更新后的 DOM，就可以使用 nextTick，
// 1. async + await nextTick()，后续获取的 DOM 就是更新后的
// 2. nextTick(callback)
const increment = () => {
  val.value++;
  //await nextTick()
  //window.confirm(numRef.value.textContent)
  nextTick(() => {
    window.confirm(numRef.value.textContent)
  })
}

</script>

<style lang="scss" scoped>

</style>
