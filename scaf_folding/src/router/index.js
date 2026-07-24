import { createRouter, createWebHistory } from 'vue-router'
import My from '@/views/My.vue'
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import _404 from '@/views/_404.vue'

//配置路由：
//下载、导入、创建、注册、配置路由、配置展示位置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/my"   //设置重定向
    },
    {
      path: "/my",
      component: My
    },
    {
      path: "/friend",
      component: Friend
    },
    {
      path: "/find/:sid",
      component: Find
    },
    {
      path: '/:pathMatch(.*)*',
      component: _404
    }
  ]
})

export default router
