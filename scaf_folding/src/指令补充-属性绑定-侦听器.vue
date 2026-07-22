<template>
    <!-- 指令修饰符:按键修饰符 -->
    <div>
        <input type="text" placeholder="Enter your name" v-model="name" @keydown.enter="submit">
    </div>

    <!-- 事件修饰符 -->
    <div @click="onDivClick">
        <!-- 阻止默认行为 -->
        <a href="https://www.chatgpt.com" style="color:aliceblue" @click.prevent>百度一下</a>
        <!-- 阻止冒泡, 事件不向上传递 -->
        <p @click.stop="onPClick">点击我不会触发div的点击事件</p>

        <!-- 既阻止默认行为,也组织向上传递 -->
        <a href="https://www.chatgpt.com" style="color:aliceblue" @click.prevent.stop>百度一下</a>
    </div>

    <!-- v-model 修饰符 -->
    <input type="text" placeholder="Enter your goods'name" v-model.trim="name"><br><br> <!-- 去除首尾空格 -->
    <input type="text" placeholder="Enter your goods'price" v-model.number="price"><br><br>
    <!-- 尝试用 parseFloat 转换为数字 -->
    <input type="text" placeholder="other infomation" v-model.lazy="backup"><br><br> <!-- 失去焦点时才更新数据 -->
    <button v-on:click="showInfo">提交</button><br><br>

    <!-- v-model 作用于其他标签 -->
    <textarea placeholder="请输入自我介绍" v-model.lazy="selfDesc"></textarea><br><br>
    <select v-model="city">
        <option value="BJ">北京</option>
        <option value="SH">上海</option>
        <option value="GZ">广州</option>
    </select><br><br>
    <input type="radio" v-model="blood" value="A">A型
    <input type="radio" v-model="blood" value="B">B型
    <input type="radio" v-model="blood" value="O">O型
    <input type="radio" v-model="blood" value="AB">AB型<br><br>

    <input type="checkbox" v-model="hobby" value="LQ">篮球
    <input type="checkbox" v-model="hobby" value="ZQ">足球
    <input type="checkbox" v-model="hobby" value="YMQ">羽毛球
    <input type="checkbox" v-model="hobby" value="PPQ">乒乓球<br><br>

    <div>
        <input type="checkbox" v-model="agree">
        <label>我已阅读并同意相关条款</label>
    </div>
    <button @click="getInfo">获取所有信息</button>
    <br><br>

    <!-- 样式绑定:操作 class -->
    <label :class="isActive ? 'active' : ''">label1</label>
    <label :class="{ 'active': isActive }">label2</label>
    <label class="info" :class="{ 'active': isActive }">label3</label>
    <!-- 样式绑定:操作 style -->
    <p :style="{ color: colorStr, background: backgroundColorStr }">样式绑定操作 style: 1</p>
    <p :style="styleObj">样式绑定操作 style: 2</p>

    <!-- 计算属性必须有返回值, 可以配合属性也可以直接作用于插值表达式, 计算属性相比普通函数调用更高效,因为有缓存存在, 只会在依赖的数据发生变化时重新计算 -->
    <h3>比特人的礼物清单</h3>
    <table>
        <tr>
            <th>名字</th>
            <th>数量</th>
        </tr>
        <tr v-for="item in goodsList" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.num }}个</td>
        </tr>
    </table>
    <p>礼物总数：{{ totalNum }} 个</p>

    <!-- 计算属性的完整写法, 当需要修改属性,即配合 v-model 使用时; 使用计算属性,自动触发get,修改计算属性自动触发set -->
    <input v-model="uname">

    <p>
        <span>
            <input type="checkbox" id="all" />
            <label for="all">全选</label>
        </span>
        <button>反选</button>
    </p>
    <ul>
        <li>
            <input type="checkbox" />
            <span>xxx</span>
        </li>
    </ul>

    <input type="text" v-model.lazy="num">
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const num = ref(1)
watch(num, (newVal, oldVal) => {
    window.confirm(`newVal: ${newVal}, oldVal: ${oldVal}`)
})

// 计划列表
const planList = ref([
    { id: 12, name: '跑步', done: false },
    { id: 76, name: '看书', done: false },
    { id: 31, name: '撸码', done: false },
    { id: 49, name: '追剧', done: false }
])

const uname = computed({
    get() {
        return '基尼台妹'
    },
    set() {
        window.confirm('你不能修改这个值')
    }
})

// 商品列表(原始数据)
const goodsList = ref([
    { id: 1, name: '篮球', num: 10 },
    { id: 2, name: '玩具', num: 3 },
    { id: 3, name: '书籍', num: 2 }
])
const totalNum = computed(() => {
    return goodsList.value.reduce((prev, item) => {
        return prev + item.num
    }, 0)
})

const colorStr = ref('red')
const backgroundColorStr = ref('blue')
const styleObj = ref({
    color: 'red',
    background: 'blue'
})

const isActive = ref(true)
const selfDesc = ref('')
const city = ref('SH')
const blood = ref('');
const hobby = ref([''])
const agree = ref(false);
const getInfo = () => {
    window.confirm(`自我介绍: ${selfDesc.value}, 城市: ${city.value}, 血型: ${blood.value}, 爱好: ${hobby.value.join(', ')}`)
}

const name = ref('')
const price = ref('')
const backup = ref('')
const showInfo = () => {
    window.confirm(`你好, ${name.value}, 价格为: ${price.value}, backup: ${backup.value}`)
}

const submit = () => {
    window.confirm(`你好, ${name.value}`)
}
const onDivClick = () => {
    window.confirm('div clicked')
}
const onPClick = () => {
    window.confirm('p clicked')
}
</script>

<style scoped>
.active {
    color: red;
}

table {
    width: 350px;
    border: 1px solid #333;
}

table th,
table td {
    border: 1px solid #333;
}

table td {
    text-align: center;
}

* {
    margin: 0;
    padding: 0;
}

div {
    width: 400px;
    margin: 100px auto;
    padding: 15px;
    font-size: 18px;
    background: plum;

    p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;

        button {
            padding: 3px 6px;
        }
    }
}

ul {
    list-style: none;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        border-top: 1px solid #ccc;

        span.completed {
            color: #ddd;
            text-decoration: line-through;
        }
    }
}

input {
    margin-right: 8px;
}
</style>