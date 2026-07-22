<script setup>
import { ref, computed } from 'vue'
// 计划列表
const planList = ref([
    { id: 12, name: '跑步', done: false },
    { id: 76, name: '看书', done: false },
    { id: 31, name: '撸码', done: false },
    { id: 49, name: '追剧', done: false }
])
//依赖项改变,computed计算属性会重新计算,自动调用get;当计算属性被改变时,会自动调用set
const isAll = computed({
    get(){
        return planList.value.every( (item) => { return item.done } )
    },
    set(val){
        planList.value.forEach( (item) => {item.done = val} )
    }
})
const reverseSelect = () => {
    planList.value.forEach( (item) => {
        if(item.done){
            item.done = false;
        }
        else{
            item.done = true;
        }
    })
}
</script>
<template>
    <p>
        <span>
            <input type="checkbox" id="all" v-model="isAll"/>
            <label for="all">全选</label>
        </span>
        <button @click="reverseSelect">反选</button>
    </p>
    <ul>
        <li v-for="item, index in planList" :key="item.id">
            <input type="checkbox" v-model="item.done"/>
            <span>{{ item.name }}</span>
        </li>
    </ul>
</template>
<style lang="scss">
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