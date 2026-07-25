# 一、 Hello World

* 引入 Vue

    ```html
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> <!--CDN 引入 vue-->
    ```

* 准备容器，并提供插值表达式用来渲染数据

    ```html
    <div id="app">
        <p>{{msg}}</p>
    </div>
    ```

* 创建 app，并在 setup 入口函数中编写 vue 逻辑代码，需要渲染到容器的数据必须统一在这里返回，并绑定到指定容器

    ```html
    <script>
        Vue.createApp({
            setup(){
                const msg = "Hello World"
                return {
                    msg
                }
            }
        }).mount("#app") //通过 id 选择器选择我们上面准备的容器
    </script>
    ```

## 1.1 setup 函数

setup 函数是 Vue 代码的入口，所有 Vue 的逻辑代码都在这里实现，插值表达式中使用的对象、变量、函数等，都要在 setup 函数体中定义，并返回

## 1.2 插值表达式

形如 `{{expression}}` 的语法叫做插值表达式。所谓表达式，指的是有结果的操作或运算，比如下面的方式都可以是插值表达式

```html
<div id="app">
    <p>{{obj.name}}</p>
    <p>{{obj.age > 18 ? '已成年' : '未成年'}}</p>
</div>
<script>
    Vue.createApp({
        const obj = {
            name: 'zhangsan',
            age: 19
        }
        function fn(){
            return "fn()"
        }
        return {
            obj,
            fn
        }
    }).mount("#app")
</script>
```

## 1.3 数据响应式

* 所谓数据响应式，简单来说，就是：数据变了，视图也发生改变

* 默认声明的数据，不具备响应式。要实现数据变了试图也发生改变的效果，就需要 Vue 中的响应式函数：reactive、ref

* reactive，需要从 Vue 中解构出来（JS 语法），接受传入一个对象，返回其响应式数据

* ref，同样需要从 Vue 中解构出来，既可以传入简单数据，也可以传入对象，得到响应式数据。在 JS 中，操作 ref 创建的响应式数据需要 `.value`，在 template 中不需要

* reactive 和 ref 各有特点，一般当数据是对象并且字段确定时，使用 reactive，其他时候都是用 ref

    ```html
    <body>
        <div id="app">
            <p>{{obj.name}}</p>
            <p>{{obj.age}}</p>
            <p>{{obj2.location}}</p>
            <p>{{msg}}</p>
            <button @click="onClick">修改响应式数据属性</button>
        </div>
    </body>
    <script>
        const { createApp, reactive, ref } = Vue
        createApp({
            setup(){
                const obj = reactive({
                    name: "zhangsan",
                    age: 19
                })
                const obj2 = ref({
                    location: "shanghai"
                })
                const msg = ref("Hello Vue3")
                function onClick(){
                    obj.name = 'lisi'
                    obj.age = 20

                    obj2.value.location = "beijing"

                    msg.value = "你好 Vue3"
                }

                return {
                    obj,
                    onClick,
                    msg
                }
            }
        }).mount("#app")
    </script>
    ```

# 二、指令

## 2.1 内容渲染指令

* 语法格式为 `v-text="content"` 或者 `v-html="content"`，将内容渲染到标签中（覆盖原有内容）
* 前者是直接渲染 content，后者会解析 html 标签

## 2.2 属性绑定指令

* 语法格式为 `v-bind:标签属性="content"`，将 content 表达式结果绑定到标签的“标签属性”
* 属性绑定指令可以简写为 `:标签属性="content"`

## 2.3 事件绑定指令

* 语法格式为 `v-on:事件="expression/funcion"`，当事件发生时，调用函数或者执行表达式
* 事件绑定指令可以简写为 `@事件="expressoin/function"`

## 2.4 条件渲染指令

* 有三条，`v-if="expr"`、`v-else-if="expr"`、`v-else`，如果 expr 为 true，则会把相应标签进行渲染；否则不进行渲染

## 2.5 列表渲染指令

* 简单来说,要哪一项重复被渲染,就在那个标签上加上 `v-for`,例如

```html
<template>
<ul>
	<li v-for="item, index in nums">{{ index }}: {{ item }}</li>
</ul>
</template>

<script setup>
	const nums = ref([1, 2, 3]);
</script>
```

* `v-for` 支持对数组, 对象, 数字(0 - num) 进行渲染.
* 对数字数组渲染时,可以选择性使用 `item` `index`, 用来取元素与下标
* 对对象进行列表渲染时,可以选择性使用 `value` `key` `index`, 其中 `value` 为键值对值, `key` 为键值对键, `index` 为键值对在整个对象中的下标顺序
* 关于 key

	* Vue 会试图复用 DOM 以提高渲染性能, 为了方便 Vue 对标签进行排序复用, 可以通过 `v-for='item, index in vals' :key="item.id"` 的方式指明某个字段作为 key. 这里的 id 从选用上来说类似于数据库的主键(当然两者作用完全不同), 不要使用 index 这种会随业务发生改变的字段, 建议单独加上一个 id 属性

## 2.6 双向绑定

### 2.6.1 基本语法

* 语法格式: `v-model="reactive_variable_name"`.
* 视图的改变会影响数据
* 数据的改变会影响视图
* 常与 `<input>` 标签搭配使用

### 2.6.2 v-model 修饰符

1. `v-model.trim`，去除首尾空格
2. `v-model.number`，尝试使用 parseFloat() 转换为数字
3. `v-model.lazy`，懒同步，即失去焦点时才同步响应式数据，而不是输入过程中一直同步

### 2.6.3 v-model 作用在其他表单元素上

**textarea**

```html
<script setup>
import { ref } from 'vue'
const selfIntro = ref( '' )
</script>

<template>
    <textarea v-model.trim="selfIntro" placeholder="请输入自我介绍"></textarea>
</template>
```

**select 下拉菜单**

```html
<script>
import { ref } from 'vue'
const region = ref( '' )
</script>

<template>
    <select v-model="region">
        <option value="SH">上海</option>
        <option value="BJ">北京</option>
        <option value="GZ">广州</option>
    </select>
</template>
```

**单选框**

```html
<script>
import { ref } from 'vue'
const blood = ref( '' )
</script>

<template>
    <input type="radio" value="A" v-model="blood">
    <input type="radio" value="B" v-model="blood">
    <input type="radio" value="AB" v-model="blood">
    <input type="radio" value="O" v-model="blood">
</template>
```

**复选框**

```html
<script>
import { ref } from 'vue'
const hobby = ref( [''] )
const agree = ref( false )
</script>

<template>
    <input type="checkbox" value="吃饭" v-model="hobby">
    <input type="checkbox" value="睡觉" v-model="hobby">
    <input type="checkbox" value="打豆豆" v-model="hobby">
    <input type="checkbox" value="确认信息无误" v-model="agree"> <!--当一组候选框只有一个时，v-model会绑定到布尔值表示是否选中-->
</template>
```

# 三、指令补充

## 3.1 指令修饰符

### 3.1.1 按键修饰符

1. `@keydown.enter`，当按键 enter 被按下时，`@keyup.enter`，当按键 enter 被抬起时
2. `@mouseenter`，当鼠标进入时，`@mouseleave`，当鼠标离开时

### 3.1.2 事件修饰符

1. 事件修饰符主要是两个，`.prevent` 和 `.stop`
2. `.prevent`，是阻止组件的默认行为，比如下面的 a 标签就无法跳转

```html
<template>
    <div @click='function'>
        <a href="www.baidu.com" @click.prevent>百度一下</a>
    </div>
</template>
```

3. `.stop`，是阻止组建将事件向上传递，例如上面的代码，虽然不会跳转，但依然会执行 `function` 回调，就是因为事件向上传递。
4. `.stop` 和 `.prevent` 可以链式使用，比如 `@click.stop.prevent`

## 3.2 样式绑定

### 3.2.1 操作 class

样式绑定操作 class，常与 `</style>` 中的类选择器搭配使用，比如批量根据条件设置为 active 或者 inactive 的样式

1. 方式一：`:class="condition ? 'className1' : 'className2'"`
2. 方式二： `:class="{ className1: condition1, className2: condition2}"`
3. 动态 class 和静态 class 可以共存

### 3.2.2 操作 style

1. 方式一：`:style="{ css1: cssVal1, css2: cssVal2 }"`
2. 方式二：`:style="cssObj"`

### 3.2.3 computed 计算属性

1. computed 需要从 'vue' 中导入，返回计算过的值，同时当计算这个值依赖的数据发生改变时，会自动重新计算

2. computed，当只需要获取数据并自动更新时，可以直接传入箭头函数作为 get()，即默认不需要 set()；但是当需要修改数据（即绑定到 v-model 时），就需要computed 的完整写法，即：

```js
const isAll = computed({
    get(){
        somecode_to_generate_data
        return data
    },
    set(val){
        some_code_to_manipulate_data
    }
})
```

这里的 set，会在通过 v-model 绑定到 isAll 的标签修改 isAll 时，自动调用 set，此时传入的 val 就是 isAll 的值

3. 相比与普通函数，computed 自带缓存功能，只有当依赖的数据发生改变时才会重新调用 get 生成

### 3.2.4 侦听器

1. `watch`，同样需要从 'vue' 中导入，要求监控的对象是相应数据源，语法格式为：`watch(objWatched, (newVal, oldVal) => {somecodes})`，当响应式数据发生改变时，会自动调用回调函数

> 关于浏览器持久化
> 浏览器提供了 localStorage，可以帮助我们通过 kv 的方式存储键值对数据，但是数据需要是序列化后的结果（可以通过 `JSON.stringify` 和 `JSON.parse`）

## 四、组件及组件化 + 组件生命周期

### 4.1 组件的导入与注册

1. 局部组件直接导入（比如 `import MyLabel from './components/MyLabel.vue'` 即可，无需在 main.js 中注册。使用时，建议使用大驼峰法或者烤串法，比如 `<MyLabel />` 或者 `<my-label />`。其实组件的导入有点类似与 C++ 的 include，不过这里没有 STL，但是类似的是 A 导入了某个组件不代表 B 也能直接使用这个组件

2. 局部组件的全局注册，需要在 main.js 中进行，同时还需要进行注册，例如：

```js
import MyLabel from './components/MyLabel.vue'
app.component('MyLabel', MyLabel)
```

### 4.2 组件的生命周期

1. 创建：创建响应式数据
2. 挂载：渲染模板
3. 更新：修改数据，更新视图
4. 卸载：卸载组件

从**创建到卸载**的过程，就是 Vue 组件的生命周期。在各个步骤之间，会自动运行一些函数，这些函数就是**Vue生命周期钩子**

### 4.3 Vue 生命周期钩子

#### 4.3.1 选项式

1. setup()，Vue 组件创建/出生阶段
2. beforeCreate()，创建前，无法访问数据和方法
3. created()，创建后，组件中的数据和方法允许访问 
4. beforeMount()，组件挂载到 DOM 树前，此时组件尚未变成真正的 DOM，无法获取
5. mounted()，标签已经变成了真正的 DOM，可以进行获取 
6. beforeUpdate()，在更新前，数据发生改变，标签重新渲染
7. updated()，更新后 
8. beforeUnmount()，卸载阶段开始
9. unmounted()，组件卸载之后 

```html
<script>
    export default{
        beforeCreate(){
            //some codes
        }
        created(){
            //some codes
        }
    }
</script>
```

钩子函数在特定时刻会自动执行，给了开发者在不同时机添加自己代码的机会；选项式 API 下，组件首次渲染，会执行 setup、beforeCreate、created、beforeMount、mounted

#### 4.3.2 组合式

Vue2 更加推荐选项式, Vue3 更加推荐组合式 

```html
<script setup>
    onBeforeMount(){
        // some codes
    }
    mounted(){
        //some codes
    }
</script>
```

1. 创建阶段: setup
2. 挂载阶段: onBeforeMount, onBeforeMounted
3. 更新阶段: onBeforeUpdate, onUpdated
4. 销毁阶段: onBeforeUnmount, unmounted(清理工作)

利用组建的生命周期,可以进行如下操作

### 4.4 生命周期的应用

#### 4.4.1 在 setup 中异步请求数据

```html
<script>
	import axios from 'axios'
	const images = ref([])
	async function getData(){
		resp = await axios({ //axios 调用后返回 Promise, 获取可以使用 await, 并使用 async 修饰 getData,完成异步请求
			method: 'GET', //默认方法是 GET
			url: 'url'
		})
		images.value = resp.data.data //假设返回正文的所需数据对应字段是 data
	}
	getData()
</script>
```

#### 4.4.2 操作组件

使用组合式钩子时, 可以在 onMounted 时操作 DOM 对象(通过 document.querySelector)

## 五、scoped + 组件通信 + props 校验

### 5.1 scoped

一个 .vue 文件, 或者说组件, 一般由三部分组成: `template` `script` `style`. 其中 style 部分 默认是全局生效的, 但是这并不是我们想要的效果, 所以可以加上 scoped 来让属性只局部生效, 比如: 

```html
<style scoped>
</style>
```

原理是当加上 scoped 后, vue 会给所有组件加上一个 data-v-xxxx(hash值) 的自定义属性, 并给该组件的 `<style>` 中的所有选择器加上 `[data-v-xxxx]` 的属性选择器, 是的只能够选中本组件中的元素

### 5.2 父子组件之间通信

#### 5.2.1 父 -> 子

1. 子组件通过 `const props = defineProps(['v1', 'v2'])` 的方式定义哪些值在父子之间传递, 后续子组件可以通过 `props.v1` `props.v2` 的方式或者直接像普通变量一样使用父组件的数据
2. 父组件首先需要导入子组件, 父组件通过为子组件自定义属性的方式传递数据, 例如:

```html
<!--App.vue-->
<script setup>
	import SubItem from './components/SubItem.vue'
	import ref from 'vue'
	const num = ref(1)
</script>
<template>
	<SubItem :num='num'/>
</template>

<!--SubItem.vue-->
<script>
	const props = defineProps(['num'])
</script>
<template>
	<label>{{ props.num }}</label>
</template>
```

3. 那么我们尝试在子组件中修改数据呢? 不可以, 因为 props 具有只读属性, 即: 谁的数据谁管理. 所以应该怎样修改呢? Vue 采取的方式是由父组件自己修改自己的数据

#### 5.2.2 子 -> 父

1. 子触发: 子组件通过 `const emit = defineEmits()` 的方式定义 emit, 当子组件因为某种条件需要修改数据时, 就可以调用 emit, 通过 `emit('dataEmit', data...)` 的方式发送数据给父组件
2. 父绑定: 父组件给子组件绑定一个回调, 例如 `<SubItem @dataEmit='callBack'\>`; `callBack` 函数用来接收数据并进行处理, 其参数应正好对应 emit 所传数据

```html
<script setup>
	import SubItem from './components/SubItem.vue'
	import ref from 'vue'
	const nums = ref([1, 2, 3])
	const del = (index) => {
		nums.value.splice(index, 1);
	}
</script>
<template>
	<SubItem :nums='nums' @del='del'/>
</template>

<!--SubItem.vue-->
<script>
	const props = defineProps(['nums'])
	const emit = defineEmits()
</script>
<template>
	<div>
		<div v-for="item, index in nums">
			<label>{{ item }}</label>
			<button @click="emit('del', index)"></button> <!-- 此处也可以是含有emit的函数 -->
		</div>	
	</div>
</template>
```

#### 5.2.3 祖孙之间（即组件关系隔了层级）

* 祖先通过 `provide("dataName", data)` 的方式向孙组件传递数据
* 孙组件通过 `const data = inject("dataName")`
* 两者都需要从 `vue` 中导入

#### 5.2.4 普通组件之间

* 普通组件之间通信，可以通过引入 mitt 包进行
* 通信双方想要通信，就要先看到同一份资源，在这里就是 emitter，可以通过 export default 的方式让这个 emitter 全局可见
* 发送方通过 `emitter.emit("dataName", data...)` 的方式发送
* 接收方通过 `emitter.on("dataName", (data...) => {}` 的方式接收并处理数据

### 5.3 props 校验

Vue 允许我们在定义 props 的时候, 对数据添加一些规则, 具体有下面几种

* type：数据类型限制，比如 Number、String、Array、Boolean 等
* required：是否必须
* default：数据的默认值，这个属性有两点需要注意
	* 不要和 required 一起使用，不会报错，但是 required 的优先级高于 default，会导致默认值不生效
	* 对于基本数据类型可以直接使用默认值，但是如果是自定义类型需要通过函数返回
* validator：对数据进行值的校验，类似数组的 filter，符合要求返回 true，否则返回 false

```html
<script>
	const props = defineProps({
		opacity: {
			type: Number, 
			required: true, 
			validator: (value) => {
				if(opacity > 0 && opacity < 1){
					return true;
				}
				else{
					return false;
				}
			}
		}
	})
</script>
```

## 六、vue-router，vue 路由管理

### 6.1 vue-router 基本使用

vue-router 是 Vue 的官方路由管理器，使用分为四部

1. **下载**：`npm i vue-router -S`
2. **导入**：`createRouter` `createWebHashHistory/createWebHistory`
3. **创建**
4. **注册**：`app.addRouter()`

其中，`createWebHashHistory` 比 `createWebHistory`  更适合开发阶段使用，不需要后端服务器。浏览器规定，`#` 后的 url 部分不会发送给后端服务器。这样前端请求的永远是 `/`，有前端自行配置路由规则（比如 `http://localhost:5173/#/`）

**路由创建与配置路由规则**

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import Find from '@/components/Find.vue'
import Like from '@/components/Like.vue'
import App from './App.vue'
import { createApp } from 'vue'
const router = createRouter({
	history: createWebHashHistory(),
	routes:[
		{
			path: '/find',
			component: Find
		},
		{
			path: `/like`,
			component: Like
		}
	]
})
const app = createApp()
app.use(router)
app.mount("#app")
```

建议把上述路由配置放到单独的 JS 文件中，比如 `./router/index.js`，都放在 main.js 中会过于臃肿

> 在 Vue 脚手架中，可以使用 `@` 代表 src 目录

**添加跳转连接和出口点**

跳转连接使用 `<router-link><router-link>`，出口点（符合路由规则的组建的挂载点）使用 `<router-view>`，例如

```html
<template>
	<router-link to="/find"></router-link>
	<router-link to="/like"></router-link>
	<router-view />
</template>
```

### 6.3 自带高亮类名

点击跳转的 router-link，Vue 会自动根据匹配情况给标签加上 `router-link-exact-active` 和 `router-link-active` 两个 class 属性，用于实现高亮。

`router-link-exact-active` 表示精准匹配，`to='find'` 仅可以匹配到 `/find`；`router-link-active` 表示模糊匹配，`/find` 开头的都可以匹配到 `to="/find"`

### 6.4 传查询参数

#### 6.4.1 路由查询参数

* **传参**，在 `<router-link to="/path?query" \>`  可以直接通过 url 的方式携带参数（路径和参数之间使用 `?` 隔开，参数使用 `参数名=值` 的方式，参数对之间使用 `&` 隔开）
* **使用参数**，在跳转到的页面中，通过 `useRoute` 获取路由对象，之后通过 `route.query.vName` 的方式获取指定参数的值

#### 6.4.2 动态查询参数

* **定义**，在配置路由规则的时候，通过 `/path/:参数名` 的方式进行占位
* **传参**，在跳转时，通过 `/path/参数` 的方式直接传递
* **接收参数**，通过 `useRoute` 获取路由对象后，通过 `route.params.参数名` 的方式获取参数值

> 相对而言，路由查询参数更适合传多个参数，动态查询参数更适合多个参数的传递（虽然也可以传多个）

### 6.5 redirect 重定向

在配置路由规则的时候，直接加上这一条即可，例如：

```js
const router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: '/path', 
		component: Path, 
		redirect: '/redirectPath'
	}]
})
```

### 6.6 编程式导航

即通过  JS 代码实现页面的跳转，通过 `router.push('path')` 的方式，例如：

```js
const router = useRouter()
function fn(){
	router.push('/path')
}
```

相比于前面的声明式导航，编程式导航也可以传递参数，并且规则和上面的声明式导航的相同

### 6.7 嵌套与守卫

#### 6.7.1 嵌套

嵌套，就是在一个路由得到的页面中，再作为路由出口再加上一套路由体系，方式就是在定义路由时再加上 `children=[{path: '/path', component: Component}]`。同时，需要配置新的路由出口，具体规则和上面一样，不过再配置 `<router-link to=''>` 的时候，跳转路径要涵盖父路径

#### 6.7.2 守卫

守卫，类似于 Spring Boot 的拦截器的作用，可以在访问页面前进行检查，决定是否允许访问，可以返回三种值代表不同的处理方式 

* true/undefined，放行
* false，不放行
* 'path'，重定向到指定 URL

将守卫注册到路由，通过 `router.beforeEach((to, from) => {})` 的方式，`to` 为请求跳转的 URL，`from` 为来源 URL

## 七、pinia，Vue3 状态管理

pinia 用来存放多个组件的共同数据，即每个组件都能够读写同一份数据（通过统一对外暴露的接口）。使用 pinia，需要以下步骤：

1. **下载 pinia**：`npm i pinia -S`
2. **导入并注册 pinia**：`app.use(createPinia())`
3. **定义仓库**：`export const useStockStore = defineStore("仓库id", setup 函数或者 Option 对象)`，建议仓库名采取 `use + id + Store` 的方式，setup 函数相对用的多一些，只需要在这里定义，就可以导出普通属性、方法、计算属性 
4. **其他组件导入仓库**：`const stockStore = useStockStore()`，这样通过 `stockStore.方法`、`stockStore.属性`、`stockStore.计算属性` 就可以访问仓库导出的可以公共访问的内容

```js
//main.js
import { createPinia } from 'pinia'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp()
const pinia = createPinia()
app.use(pinia)

//@/store/stock.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export default useStockStore = defineStore('stock', () => {
	const stock = ref(20)
	const sub = computed(() => {
		return stock.value--
	})
	const add = computed(() => {
		return stock.value++
	})
	const double = () => {
		return stock.value * 2
	}
	return {
		stock,
		add,
		sub,
		double
	}
})

//其他组件
import { useStockStore } from '@/store/stock.js'
const stockStore = useStockStore()
```
