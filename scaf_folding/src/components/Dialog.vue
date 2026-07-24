<script setup>
//props 检验完整写法:
//1. type, 属性类型, 可以写为 Number, String, Boolean...
//2. required, 是否必须, 
//3. default, 默认值. default 不要和 required 同时写, 后者优先级更高; default 对于基本类型可以直接写默认值,如果是自己定义的类需要通过函数自己返回
//4. validator, 传入校验函数, 格式为 (value) => {return boolean}, 其中value 为传给 props 属性的值, value 进行校验之后返回bool值表示是否通过

//props 和 ref 与 reactive 的区别
//相同点: 都是用来为组件提供数据
//不同点: props 具有只读属性, 子组件只能读 props 中的属性进行读操作; ref 和reactive 提供的属性都是组件的一部分

const props = defineProps({
    opacity: {
        type: Number, //Number, String, Boolean
        required: true,
        validator: (value) => {
            if(value <= 0 || value >= 1){
                window.alert("value should within 0 and 1")
                return false;
            }
            return true
        }
    }
})
</script>
<template>
    <div class="bit-dialog" :style="{ background: `rgba(0,0,0,${props.opacity})` }"></div>
</template>
<style lang="scss" scoped>
.bit-dialog {
    display: flex;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 100px;
    background: rgba(0, 0, 0, 0.3);

    .dialog-container {
        width: 600px;
        height: fit-content;
        background: #fff;

        .dialog-header {
            padding: 10px 20px;
            height: 35px;
            line-height: 35px;
            box-shadow: 0 3px 6px 0 rgba(7, 35, 68, 0.15);
        }

        .dialog-body {
            padding: 10px 20px;
        }
    }
}
</style>