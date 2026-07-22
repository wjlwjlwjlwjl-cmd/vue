<template>
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
</template>

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
</script>

<style scoped>
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

</style>