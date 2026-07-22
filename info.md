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

## 双向绑定

* 语法格式: `v-model="reactive_variable_name"`.
* 视图的改变会影响数据
* 数据的改变会影响视图
* 常与 `<input>` 标签搭配使用