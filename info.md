# 一、 快速上手

## 1.1 Hello World

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

### 1.1.1 setup 函数

setup 函数是 Vue 代码的入口，所有 Vue 的逻辑代码都在这里实现，插值表达式中使用的对象、变量、函数等，都要在 setup 函数体中定义，并返回

### 1.1.2 插值表达式

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

### 1.1.3 数据响应式

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