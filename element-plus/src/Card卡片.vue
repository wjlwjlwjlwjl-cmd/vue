<template>
    <el-card style="max-width: 480px">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
            </div>
        </template>
        <template #default>
            <p v-for="i in 4" :key="i" class="text item">
                {{ 'List item ' + i }}
            </p>
        </template>
        <template #footer>Footer content</template>
    </el-card>
</template>
<style scoped>
* {
    margin: auto auto
}
</style>