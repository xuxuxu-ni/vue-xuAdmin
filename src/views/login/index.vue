<template>
  <div id="login">
    <h3 class="loginTitle">vue-xuadmin权限管理后台模板</h3>
    <div class="loginBox">
      <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item>
          <span class="ico"><i class="fa fa-user fa-lg"></i></span><el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="ico"><i class="fa fa-unlock-alt fa-lg"></i></span><el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'vue-xuadmin',
        password: '123456'
      }
    }
  },
  methods: {
    submitForm () {
      let that = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message({
          showClose: true,
          message: '账号或密码不能为空',
          type: 'error'
        })
        return false
      } else {
        // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
        that.$store.dispatch('setToken', that.loginForm.username).then(() => {
          that.$router.push({path: '/'})
        }).catch(res => {
          that.$message({
            showClose: true,
            message: res,
            type: 'error'
          })
        })
      }
    },
    message() {
      const h = this.$createElement;
      this.$notify({
        title: '账号密码',
        message: h('i', { style: 'color: teal'}, '账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token'),
        duration: 6000
      });
    },
  },
  mounted() {
    this.message()
  }
}
</script>
<style lang="scss">
#login{
  width: 100%;
  height: 100%;
  background: #2d3a4b;
  .loginTitle{
    padding-top: 230px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin-top: 0px;
  }
  .loginBox{
    width: 300px;
    height: 600px;
    margin: 20px auto;
    .el-form-item__content{
      margin-left: 0px !important;
      .subBtn{
        width: 100%;

      }
    }
    input{
      padding-left: 50px;
    }
    .el-form-item__content .ico{
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      width: 40px;
      height: 39px;
      text-align: center;
      border-right: 1px solid #ccc;
    }
  }
}
</style>
