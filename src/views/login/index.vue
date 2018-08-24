<template>
  <el-form label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="loginForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        this.$router.push({ path: '/' }) // 登录成功之后重定向到首页
      }).catch(err => {
        this.$message.error(err) // 登录失败提示错误
      })
    }
  }
}
</script>
