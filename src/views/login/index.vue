<template>
  <div>
    <h3 class="loginTitle">xuAdmin后台管理系统模板</h3>
    <div class="loginBox">
      <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item>
          <span class="ico"><i class="fa fa-user fa-lg"></i></span><el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="ico"><i class="fa fa-unlock-alt fa-lg"></i></span><el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="subBtn" type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {
      if (this.ruleForm.username == '' || this.ruleForm.password == '') {
        this.$message({
          showClose: true,
          message: '账号或密码不能为空',
          type: 'error'
        })
        return false
      } else {
        this.$router.push({path: '/'})
      }
    }
  }
}
</script>
<style lang="scss">
body{
  background: #2d3a4b;
  .loginTitle{
    margin-top: 230px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
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
