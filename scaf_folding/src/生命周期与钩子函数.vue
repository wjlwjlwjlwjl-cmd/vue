<script setup>
    import {onMounted} from 'vue'
    onMounted(() => {
        const div = document.querySelector("div.box")
        div.classList.add('animate')
    })
</script>
<template>
    <div class="box">我要收起来了</div>
</template>
<style>
.box {
    width: 350px;
    height: 700px;
    margin: 50px auto;
    line-height: 700px;
    font-size: 27px;
    color: #fff;
    text-align: center;
    background: yellowgreen;
}

.box.animate {
    animation: slideUp 4s forwards;
}

@keyframes slideUp {
    from {
        height: 700px;
        opacity: 1;
    }

    to {
        height: 0;
        opacity: 0;
    }
}
</style>