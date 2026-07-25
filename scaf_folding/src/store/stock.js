import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

//仓库名称 + setup 函数或者 option 对象
export const useStockStore = defineStore('stock', () => {
  //普通属性也可以返回
  const stock = ref(20)

  //方法可以返回
  const add = () => {
    console.log(stock.value)
    stock.value++
  }

  const sub = () => {
    console.log(stock.value)
    stock.value--
  }

  //计算属性可以返回
  const double = computed(() => {
    return stock.value * 2
  })

  return {
    add,
    sub,
    double,
    stock
  }
})
