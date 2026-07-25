<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useStockStore } from '@/store/stock';
const stockStore = useStockStore()
</script>
<template>
  <div>
    <h3>Sub组件</h3>
    <p>已知库存数: {{ stockStore.stock }}</p>
    <button @click="stockStore.sub()">库存-1</button>
  </div>
</template>
