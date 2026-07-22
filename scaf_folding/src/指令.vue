<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, ref } from 'vue'

const msg = ref("Hello Vue3")
const obj = reactive({
    name: 'zhangsan',
    age: 19
})
function fn() {
    return 'fn()'
}
const str = ref('<span style="color: red;">Hello Vue3 + Vite</span>')
const url = ref("https://gitee.com/wangs-joyful-home")

const cnt = ref(0)
function decrease() {
    cnt.value-- //操作 ref 创建的响应式数据需要.value
}
function add2(a) {
    cnt.value += a
}
function sub2(b) {
    cnt.value -= b
}

const visible = ref(true)
const isLogin = ref(false)
const score = ref(108)

const i = ref(0)
const images = [
    'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0f9be4b071da45d9a0c2.jpg',
    'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0fa3e4b071da45d9a0c3.jpg',
    'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa10ace4b071da45d9a0c4.jpg'
]

function prev() {
    i.value--
    if (i.value < 0) {
        i.value = images.length - 1
    }
}
function next() {
    i.value++
    if (i.value >= images.length) {
        i.value = 0
    }
}

const nums = ref([1, 2, 3, 4, 5])
const balls = ref([
    { name: '姚明', team: '火箭' },
    { name: '科比', team: '湖人' },
    { name: '詹姆斯', team: '骑士' }
])
const obj1 = ref({
    name: '张三',
    age: 19
})

const goodsList = ref([
    { goodName: '苹果', price: 5, id: 1 },
    { goodName: '香蕉', price: 3, id: 2 },
    { goodName: '橘子', price: 4, id: 3 }
])

const del = (index) => {
    if(window.confirm("确定删除吗?")){
        goodsList.value.splice(index, 1)
    }
}
const loginUser = reactive({
    userName: "",
    userPassword: ""
})
const submit = ref(() => {
    window.confirm(`用户名: ${loginUser.userName}, 密码: ${loginUser.userPassword}`)
})
const clean = ref(() => {
    loginUser.userName = ""
    loginUser.userPassword = ""
})
</script>

<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- v-model 双向绑定, v-model="响应式数据"-->
    <div class="login">
        <input type="text" v-model="loginUser.userName" placeholder="请输入用户名"><br>
        <input type="password" v-model="loginUser.userPassword" placeholder="请输入密码"><br>
        <div class="op">
            <button @click="submit">submit</button>
            <button @click="clean">clear</button>
        </div>
    </div>

    <!-- 增加key,vue会尝试复用渲染好的 dom,可以提高性能,:key="唯一值",id可以是数字/字符串 -->
    <table border="1" cellspacing="0" cellpadding="0">
        <caption><h3>比特人的橱窗</h3></caption>
        <thead>
            <tr>
                <th>商品</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item, index in goodsList" :key="item.id">
                <td>{{ item.goodName }}</td>
                <td>{{ item.price }}</td>
                <td><button @click="del(index)">删除</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr v-show="goodsList.length == 0">
                <td colspan="3">暂无数据</td>
            </tr>
        </tfoot>
    </table>

    <div>
        <p>{{ msg }}</p>
        <p>{{ obj.name }}</p>
        <p>{{ obj.age }}</p>
        <p>{{ fn() }}</p>

        <!--内容渲染指令（v-html="表达式"）-->
        <p v-html="str"></p> <!--解析标签-->
        <p v-text="msg"></p> <!--不解析标签-->

        <!--属性绑定指令，将表达式结果绑定到标签属性（v-bind:属性="表达式"，或者简写为 :属性="表达式"）-->
        <a v-bind:href="url" style="color:aliceblue">跳转到我的Gitee主页</a><br>
        <a :href="url" style="color:aliceblue">跳转到我的Gitee主页</a>

        <!--事件绑定指令（v-on:事件="内敛语句/函数"，也可以简写为 @事件="内联语句/函数" ）-->
        <p>{{ cnt }}</p>
        <button v-on:click="cnt++">cnt+1</button>
        <button v-on:click="decrease">cnt-1</button>
        <button v-on:click="add2(2)">cnt+2</button>
        <button @click="sub2(2)">cnt-2</button>

        <!--条件渲染指令（v-show="bool表达式"，v-if="bool表达式"、v-else-if="bool表达式"、v-else）-->
        <div v-show="visible" class="red"></div>
        <div v-if="visible" class="green"></div>

        <div v-if="isLogin">Welcome back</div>
        <div v-else>Please login</div>

        <div v-if="score >= 90">优秀</div>
        <div v-else-if="score >= 70">良好</div>
        <div v-else>差</div>

        <!--轮播条-->
        <div class="banner">
            <img v-bind:src="images[i]">
            <div class="ctrl">
                <a class="btn prev" @click="prev" href="javascript:;">&lt;</a>
                <a class="btn next" @click="next" href="javascript:;">&gt;</a>
            </div>
        </div>

    </div>

    <h3>可折叠面板</h3>
    <div class="panel">
        <div class="title">
            <h4>自由与爱情</h4>
            <span class="btn1" @click="visible = !visible"> 收起 </span>
        </div>
        <div class="container" v-show="visible">
            <p>生命诚可贵,</p>
            <p>爱情价更高。</p>
            <p>若为自由故，</p>
            <p>两者皆可抛。</p>
        </div>
    </div>

    <!-- 列表渲染指令v-for,要渲染谁就给谁加这个指令,可以作用于数组,对象,数字 -->
    <div>
        <ul>
            <li v-for="item, index in nums"> {{ index }}: {{ item }}</li>
        </ul>
    </div>
    <div>
        <p v-for="item, index in balls">{{ index }}: {{ item.name }}, {{ item.team }}</p>
    </div>
    <div>
        <ul>
            <li v-for="value, key, index in obj1">{{ index }}-{{ key }}: {{ value }}</li>
        </ul>
    </div>
    <div>
        <ul>
            <li v-for="item in 10">{{ item }}</li>
        </ul>
    </div>
    
</template>

<style scoped>
table {
    width: 500px;
    margin: 100px auto;
    text-align: center;
}
tr{
    height: 40px;
}
tfoot tr{
    height:500px;
}

.red,
.green {
    height: 200px;
    width: 200px;
}

.red {
    background: red;
}

.green {
    background: green;
}

a {
    text-decoration: none;
    color: aliceblue
}

.banner {
    position: relative;
    /**相对定位，作为内部按钮的定位参照物 */
    margin: 150px auto;
    /**上下外边距150px，auto 左右居中 */
    width: 1200px;
    height: 337px;
}

.btn {
    position: absolute;
    /**绝对定位，可以自由摆放位置 */
    top: 50%;
    /**元素顶部在距离父容器 50% 位置 */
    width: 30px;
    height: 30px;
    line-height: 30px;
    /**行高等于高度，实现文字竖直居中 */
    margin-top: -15px;
    /**向上偏移一半 */
    font-size: 14px;
    text-align: center;
    /**文字水平居中 */
    color: aliceblue;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
}

.btn.prev {
    left: 15px;
}

.btn.next {
    right: 15px;
}

body {
    background-color: #ccc;
}

#app {
    width: 400px;
    margin: 20px auto;
    padding: 1em 2em 2em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    background-color: #fff;
}

#app h3 {
    text-align: center;
}

.panel {
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1em;
        border: 1px solid #ccc;
    }

    .title h4 {
        line-height: 2;
        margin: 0;
    }

    .container {
        border: 1px solid #ccc;
        padding: 0 1em;
    }

    .btn1 {
        cursor: pointer;
    }
}

.login {
    margin: 150px auto;
    width: 400px;
}
.login input {
    display: block;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding-left: 5px;
}

.login .op{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

</style>