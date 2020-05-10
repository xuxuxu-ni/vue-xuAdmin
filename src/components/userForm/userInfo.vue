<template>
  <el-dialog :title="title" width="800px" :visible.sync="visible" destroy-on-close @close="closeCallback">
    <div class="card">
    <p class="title"><i class="fa fa-th-large fa-lg"></i>个人资料</p>
    <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item v-if="!userId" label="密码" prop="password">
        <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item v-if="!userId" label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-if="roleName" v-model="ruleForm2.roleId" disabled  placeholder="请选择等级">
          <el-option
            v-for="item in roleData"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-else v-model="ruleForm2.roleId"  placeholder="请选择等级">
          <el-option
            v-for="item in roleData"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm2.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="ruleForm2.sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm2.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobilePhone">
        <el-input v-model="ruleForm2.mobilePhone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="ruleForm2.status"></el-switch>
      </el-form-item>
      <el-form-item label="头像上传">
        <el-upload
          class="avatar-uploader"
          action="/api/editor/uploadImg"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="ruleForm2.avatar" :src="ruleForm2.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
        <el-button @click="resetForm('ruleForm2')">重 置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "userInfo",
  props: {
    title: {
      type: String,
      default: "账号信息"
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      default: ""
    }
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass")
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"))
      } else if (value !== this.ruleForm2.password) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    return {
      roleName: false,
      roleData: "",
      visible: this.dialogVisible,
      ruleForm2: {
        mobilePhone: "",
        username: "",
        password: "",
        checkPass: "",
        roleId: "",
        status: "",
        sex: "1",
        age: 0,
        name: "",
        avatar: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ],
        password: [
          {required: true, validator: validatePass, trigger: "blur"}
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: "blur"}
        ],
        roleId: [
          { required: true, message: "请选择用户角色", trigger: "change" }
        ]
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.ruleForm2.avatar = res.data[0]
    },
    closeCallback () {
      this.$emit("successCallback")
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === "image/jpeg"
      const isPNG = file.type === "image/png"
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!(isJPG || isPNG)) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!")
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!")
      }
      // eslint-disable-next-line no-mixed-operators
      return isLt2M && isJPG || isPNG
    },
    getList () {
      let that = this
      this.$request.fetchGetRoleList().then(function (response) {
        that.roleData = response.data.rows
        let userId = that.userId
        if (!userId) {
          return false
        }
        that.$request.fetchGetUserInfoId({id: userId})
          .then(function (res) {
            console.log(res)
            res.data.password = ""
            if (res.data.status === "1") {
              res.data.status = true
            } else {
              res.data.status = false
            }

            that.ruleForm2 = res.data
            that.roleName = true
            for (let i = 0; i < that.roleData.length; i++) {
              if (that.$store.getters.info.role === "超级管理员" && that.$store.getters.info.uid !== userId) {
                that.roleName = false
              }
            }
            return false
          })
          .catch(function (error) {
            console.log(error)
          })
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let newData = {}
          let fetchFn = this.$request.fetchEditUser
          if (!that.userId) {
            for (let item in that.ruleForm2) {
              if (item !== "checkPass") {
                newData[item] = that.ruleForm2[item]
              }
            }
            fetchFn = this.$request.fetchRegister
          } else {
            for (let item in that.ruleForm2) {
              if (item !== "password" && item !== "checkPass") {
                newData[item] = that.ruleForm2[item]
              }
            }
          }
          fetchFn(newData).then((res) => {
            that.$message({
              showClose: true,
              message: res.data.message,
              type: "success"
            })
          }).catch((err) => {
            console.log(err)
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    // this.getList()
  }
}
</script>
<style scoped>
  .demo-ruleForm {
    width: 460px;
    padding-top: 25px;
  }
  .el-select {
    width: 100%;
  }
  .card {
    width: 560px;
    padding-bottom: 15px;
    margin: 0px auto;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
