<template>
    <div>
        <el-button @click="visible = true" type="primary">Exit</el-button>
        <span>
            <el-dialog v-model="visible" title="Tips" :before-close="onBeforeExit">
                <span>This is a message</span>
                <template #footer>
                    <div>
                        <el-button @click="visible = false">Confirm</el-button>
                        <el-button @click="visible = false">Cancel</el-button>
                    </div>
                </template>
            </el-dialog>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const visible = ref(false)
const onBeforeExit = () => {
    ref.value = true
    ElMessageBox.confirm("Do really want to close the tag?")
    .then(() => {visible.value = false})
    .catch(() => {})
}
</script>

<style lang="scss" scoped>

</style>