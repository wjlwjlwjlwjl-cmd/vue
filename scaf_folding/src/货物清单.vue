<script setup>
import { watch, ref, reactive, computed } from 'vue'
const KEY = "wjl_food_list_key"

// 商品列表
const goodsList = ref(JSON.parse(localStorage.getItem(KEY)) || [
    { id: 190, name: '魏家凉皮', price: 10, num: 2 },
    { id: 237, name: '肉夹馍', price: 11, num: 3 },
    { id: 163, name: '冰峰', price: 3, num: 2 }
])
const del = (index) => {
    goodsList.value.splice(index, 1)
}
const goodsItem = reactive({
    name: '',
    price: '',
    num: ''
})
const addItem = () => {
    if (goodsItem.name && goodsItem.price && goodsItem.num) {
        goodsList.value.push({
            ...goodsItem,
            id: Date.now()
        })
    }
    window.confirm(`length: ${goodsList.value.length}`)
    goodsItem.name = goodsItem.price = goodsItem.num = ''
}
const totalNum = computed(() => {
    return goodsList.value.reduce((prev, item) => { return prev + parseInt(item.num) }, 0)
})
const totalCash = computed(() => {
    return goodsList.value.reduce((prev, item) => { return prev + item.price * item.num }, 0)
})

watch(goodsList, (newVal) => {
    localStorage.setItem(KEY, JSON.stringify(newVal))
}, {
    deep: true
})
</script>

<template>
    <div class="goods-container">
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, index in goodsList" :keys="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.num }}</td>
                    <td :class="{ 'active': item.price * item.num > 20000 }">{{ item.price * item.num }}</td>
                    <td><a href="#" @click="del(index)">删除</a></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td colspan="6" class="empty" v-show="goodsList.length === 0">
                        暂无数据
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">总数量：<b>{{ totalNum }}</b></td>
                    <td colspan="4">总金额：<b>{{ totalCash }}</b></td>
                </tr>
            </tfoot>
        </table>
        <form>
            <div class="form-item">
                <label class="label">名称：</label>
                <div class="input">
                    <input type="text" placeholder="请输入名称" v-model.lazy="goodsItem.name" />
                </div>
            </div>
            <div class="form-item">
                <label class="label">价格：</label>
                <div class="input">
                    <input type="number" placeholder="请输入价格" v-model.lazy="goodsItem.price" />
                </div>
            </div>
            <div class="form-item">
                <div class="label">数量：</div>
                <div class="input">
                    <input type="numer" placeholder="请输入数量" v-model.lazy="goodsItem.num" />
                </div>
            </div>
            <div class="form-item">
                <div class="label"></div>
                <div class="input">
                    <button class="btn-add" @click.prevent="addItem">新增</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style>
.goods-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: 50px auto;
    font-family: 'Courier New', Courier, monospace;
}

.goods-container table {
    flex: 4;
}

.goods-container table {
    width: 100%;
    border-spacing: 0;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
}

.goods-container table th {
    background: #f5f5f5;
}

.goods-container table tr:hover td {
    background: #f5f5f5;
}

.goods-container table td,
.goods-container table th {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
}

.goods-container table td a {
    color: blue;
    text-decoration: none;
}

.goods-container table td.active {
    color: #f00;
}

.goods-container table tbody .empty {
    height: 100px;
    color: #999;
    font-size: 18px;
}

.goods-container table tfoot {
    background: #f5f5f5;
}

.goods-container form {
    margin-top: 50px;
}

.goods-container form .form-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
}

.goods-container form .form-item .label {
    width: 60px;
    font-size: 14px;
    text-align: right;
}

.goods-container form .form-item .input {
    flex: 1;
}

.goods-container form .form-item input {
    box-sizing: border-box;
    width: 250px;
    height: 36px;
    border: 1px solid #ccc;
    padding: 10px;
    appearance: none;
    outline: none;
    color: #999;
}

.goods-container form .form-item input::placeholder {
    color: #999;
}

.goods-container form .form-item .btn-add {
    padding: 6px 12px;
    border: 1px solid blue;
    font-size: 14px;
    border-radius: 4px;
    background: blue;
    color: #fff;
    appearance: none;
    outline: none;
    cursor: pointer;
}

</style>