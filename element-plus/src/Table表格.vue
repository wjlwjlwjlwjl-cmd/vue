<script setup>
import { ref } from 'vue'
const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
])

</script>
<template>
    <div class="table">
        <el-table :data="tableData"> <!--数据源-->
            <el-table-column prop="date" label="date"></el-table-column> <!--label 列名，prop 渲染的字段名-->
            <el-table-column prop="name" label="name"></el-table-column>
            <el-table-column prop="address" label="address"></el-table-column>
            <el-table-column label="handle"> <!--插槽自定义列模板-->
                <template #default>
                    <el-icon :size="18">
                        <Delete/>
                    </el-icon>
                    <el-icon :size="18">
                        <Edit/>
                    </el-icon>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>