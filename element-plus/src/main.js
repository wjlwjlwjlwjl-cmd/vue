import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入 ElementPlus 组件
import ElementPlus from 'element-plus'
// 导入组件样式
import 'element-plus/dist/index.css'
// 导入 element-plus 图表
import { Delete, Edit } from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册所有组件
app.use(ElementPlus)

//全局注册图标
app.component(Delete.name, Delete)
app.component(Edit.name, Edit)

app.mount('#app')
