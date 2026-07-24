<script setup>
// oxlint-disable vue/valid-define-emits
//父传子:
//1. 由子通过 defineProps 定义传输字段,在template中可以直接当变量使用
//2. 由父导入子组件,并通过自定义子组件相应字段属性来传输给子数据
//props字段是只读的,不能进行修改
//子传父:
//1. 父绑定 @case
//2. 子触发 emit
const props = defineProps(['imgUrl', 'title', 'price', 'idx'])
const emit = defineEmits()
const onCut = () => {
    emit('cut', props.price, props.idx)
}
</script>
<template>
    <div class="item">
        <img :src="imgUrl" :alt="title" />
        <p class="name">{{ title }}</p>
        <p class="price">
            <span>{{ price }}</span>
            <button @click="onCut">砍一刀</button>
        </p>
    </div>
</template>
<style lang="scss" scoped>
.item {
    width: 240px;
    margin-left: 10px;
    padding: 20px 30px;
    transition: all 0.5s;
    margin-bottom: 20px;

    .item:nth-child(4n) {
        margin-left: 0;
    }

    &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -4px, 0);
        cursor: pointer;
    }

    img {
        width: 100%;
    }

    .name {
        font-size: 18px;
        margin-bottom: 10px;
        color: #666;
    }

    .price {
        display: flex;
        height: 36px;
        align-items: center;
        font-size: 22px;
        color: firebrick;

        button {
            margin-left: 80px;
            font-size: 14px;
            outline: none;
        }
    }

    .price::before {
        content: '¥';
        font-size: 22px;
    }
}
</style>
