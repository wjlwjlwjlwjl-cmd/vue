<template>
    <div>
        <el-tree :data="data" show-checkbox>

        </el-tree>
    </div>
</template>

<script setup>
    const data = [
        {
            label: "Level1 Label1",
            children: [
                {
                    label: "Level2 Label1",
                    children: []
                },
                {
                    label: "Level2 Label2",
                    children: []
                }
            ]
        },
        {
            label: "Level1 Label1",
            children: [
                {
                    label: "Level2 Label3",
                    children: []
                },
                {
                    label: "Level2 Label4",
                    children: []
                }
            ]
        }
    ]
</script>

<style lang="scss" scoped>
</style>