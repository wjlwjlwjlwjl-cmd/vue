<script setup>
//参数校验：
//1. 整个表单项的校验 2. 单个参数校验
import { reactive, ref } from 'vue'
const loginForm = reactive({
  username: '',
  password: ''
})
const loginRef = ref(null)
const loginFormRules = reactive({
  username: [
    {
      required: true,
      message: "username cannot be empty",
      trigger: 'blur'
    },
    {
      min: 3,
      max: 10,
      message: "length should within 3 and 10",
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: "password cannot be empty",
      trigger: 'blur'
    },
    {
      min: 6,
      max: 15,
      message: "length should within 6 and 15",
      trigger: 'blur'
    }
  ]
})
const onSubmit = async () => {
  loginRef.value.validate((valid) => {
    if (!valid) {
      window.alert("form incorrect")
    }
  })

}
const onCancel = () => {
  loginRef.value.resetFields()
}
</script>
<template>
  <!-- Form 组件 -->
  <div class="login-box">
    <el-form ref="loginRef" :rules="loginFormRules" :model="loginForm">
      <!-- 单个表单项校验规则 el-form   :model 表单对象   :rules 校验规则对象-->
      <el-form-item prop="username"> <!-- el-form-item 字段名称 -->
        <el-input type="text" placeholder="Username" v-model="loginForm.username"></el-input> <!-- 表单控件 v-model='数据' -->
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">Submit</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped>
* {
  margin: 0;
}

body {
  background: #ddd;
}

.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .el-form {
    width: 500px;
    padding: 40px 50px;
    background: #fff;

    .el-form-item {
      margin: 20px 0;
    }

    .el-input {
      height: 40px;
    }
  }
}
</style>