<script setup>
import Add from '@/components/Add.vue'
import Sub from '@/components/Sub.vue'
import { useStockStore } from './store/stock.js';

const stockStore = useStockStore()
</script>
<template>
  <div>
    <h1>根组件</h1>
    <p>
      <span>库存总数:</span>
      <input type="number" v-model.number="stockStore.stock">
      <label>翻倍后的库存总数{{ stockStore.double }}</label>
    </p>
  </div>
  <hr />
  <Add />
  <hr />
  <Sub />
</template>
<style>
#app {
  width: 350px;
  margin: 60px auto;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
