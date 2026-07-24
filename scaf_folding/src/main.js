import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router/index.js'

const app = createApp(App)

/*app.directive("focus", {
  //挂载后自动执行
  mounted(el){
    console.log(el)
    el.focus()
  }
})*/

//当挂载时和更新时行为相同，可以简化写法
app.directive("focus", (el) => {
  el.focus()
})

app.directive("color", {
  mounted(el, binding){
    el.style.color = binding.value
  },
  updated(el, binding){
    el.style.color = binding.value
  }
})

app.directive("lazyload", (el, binding) => {
  //entry，交叉状态对象
  const io = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting){
      el.src = binding.value
      el.addEventListener('error', (error) => {
        console.log("图片加载失败", error)
      })
      io.unobserve(el)
      io.disconnect()
    }
  })
  io.observe(el) //开始监听
})

app.use(router)

app.mount("#app")
