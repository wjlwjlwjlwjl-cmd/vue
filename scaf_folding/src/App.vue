<script setup>
import { reactive, ref } from 'vue'
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
let timer = null
const play = () => {
    timer = setInterval(() => {
        next()
    }, 3000);
}
const stop = () => {
    clearInterval(timer)
}
</script>

<template>
        <!--轮播条-->
        <div class="banner" @mouseenter="stop" @mouseleave="play">
            <img v-bind:src="images[i]">
            <div class="ctrl">
                <a class="btn prev" @click="prev" href="javascript:;">&lt;</a>
                <a class="btn next" @click="next" href="javascript:;">&gt;</a>
            </div>
        </div>
</template>

<style scoped>
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