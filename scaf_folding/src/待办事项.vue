<script setup>
    import { ref } from 'vue';
    const todos = ref([
        { id: 1, text: '烫个卷毛', completed: false },
        { id: 2, text: '买一杯奶茶', completed: false },
        { id: 3, text: '去健身房', completed: false },
        { id: 4, text: '学习Vue3', completed: false },
        { id: 5, text: '写一篇文章', completed: false },
        { id: 6, text: '去旅行', completed: false },
        { id: 7, text: '看一场电影', completed: false },
        { id: 8, text: '做一顿美食', completed: false },
        { id: 9, text: '读一本书', completed: false },
    ]);
    const del = (id) => {
        todos.value = todos.value.filter((item) => item.id !== id);
    }
    const content = ref("");
    const addTodo = () => {
        content.value = content.value.trim();
        if(content.value === "")  return;
        todos.value.push({
            id: Date.now(),
            text: content.value,
            completed: false
        })
        content.value = "";
    }
    const clearAll = () => {
        todos.value = [];
    }
</script>

<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input v-model="content" @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <section class="main">
            <ul class="todo-list">
                <li>
                    <div class="view" v-for="item in todos" :key="item.id">
                        <label>{{ item.text }}</label>
                        <button class="destroy" @click="del(item.id)"></button>
                    </div>
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count"><strong>{{ todos.length }}</strong> item all</span>
            <button class="clear-completed" @click="clearAll">Clear all</button>
        </footer>
    </section>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #f5f7fb;
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.todoapp {
    width: 520px;
    margin: 60px auto;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

/* Header */
.header {
    padding: 30px;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
}

.header h1 {
    color: #fff;
    text-align: center;
    font-size: 42px;
    margin-bottom: 20px;
    letter-spacing: 2px;
}

.new-todo {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 16px;
    outline: none;
}

.new-todo:focus {
    box-shadow: 0 0 0 3px rgba(255,255,255,.35);
}

/* Main */
.main {
    padding: 20px;
}

/* 重点：竖向排列 */
.todo-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

/* 每一个任务 */
.todo-list li {
    width: 100%;
    background: #fafafa;
    border-radius: 10px;
    transition: .25s;
    border: 1px solid #eee;
}

.todo-list li:hover {
    background: #f3f7ff;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,.08);
}

.view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18px;
    width: 100%;
}

.view label {
    flex: 1;
    font-size: 17px;
    color: #333;
    word-break: break-all;
}

/* 删除按钮 */
.destroy {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: #ff4d4f;
    cursor: pointer;
    position: relative;
    transition: .3s;
    flex-shrink: 0;
}

.destroy:hover {
    background: #ff7875;
    transform: rotate(90deg);
}

.destroy::before,
.destroy::after {
    content: "";
    position: absolute;
    left: 8px;
    top: 15px;
    width: 16px;
    height: 2px;
    background: #fff;
}

.destroy::before {
    transform: rotate(45deg);
}

.destroy::after {
    transform: rotate(-45deg);
}

/* Footer */
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
    border-top: 1px solid #eee;
    background: #fafafa;
}

.todo-count {
    color: #666;
}

.todo-count strong {
    color: #2575fc;
}

.clear-completed {
    border: none;
    background: #2575fc;
    color: #fff;
    padding: 8px 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: .25s;
}

.clear-completed:hover {
    background: #1b5fd4;
}

/* 滚动（任务很多时） */
.main {
    max-height: 500px;
    overflow-y: auto;
}

.main::-webkit-scrollbar {
    width: 6px;
}

.main::-webkit-scrollbar-thumb {
    background: #cfd8dc;
    border-radius: 6px;
}

.main::-webkit-scrollbar-thumb:hover {
    background: #90a4ae;
}
</style>