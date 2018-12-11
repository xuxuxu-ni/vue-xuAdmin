<template>
  <div class="wrap">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="indexName"
        label="首页"
        :rules="{
      required: true, message: '分类不能为空', trigger: 'blur'
    }"
      >
        <el-input placeholder="导航名称" v-model="dynamicValidateForm.indexName"></el-input>
        <el-input placeholder="path路径" disabled v-model="dynamicValidateForm.indexHref"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'导航' + (index+1)"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
      >
        <el-input placeholder="导航名称" v-model="domain.name"></el-input>
        <el-input placeholder="path路径" v-model="domain.href"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增分类</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'navClassify',
  data () {
    return {
      dynamicValidateForm: {
        domains: [],
        indexName: '首页',
        indexHref: '/index'
      }
    }
  },
  methods: {
    submitForm (formName) {
      let oneData = {
        name: this.dynamicValidateForm.indexName,
        href: this.dynamicValidateForm.indexHref
      }
      function coppyArray (arr) {
        return arr.map((e) => {
          if (typeof e === 'object') {
            return Object.assign({}, e)
          } else {
            return e
          }
        })
      }
      let arrdata = coppyArray(this.dynamicValidateForm.domains)
      arrdata.unshift(oneData)
      let formData = arrdata
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/api/setting/setNavClassify', {
            navClassifyData: formData
          })
            .then(response => {
              console.log(response)
              that.$message({
                showClose: true,
                message: response.data.msg,
                type: 'success'
              })
            })
            .catch(err => {
              console.log(err)
              that.$message({
                showClose: true,
                message: err,
                type: 'error'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        indexName: '',
        indexHref: '',
        key: Date.now()
      })
    }
  },
  mounted () {
    //  页面加载完之后从后台获取导航列表
    let that = this
    // this.$axios.get('/api/setting/getNavClassify')
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       console.log(response)
    //       that.dynamicValidateForm.indexName = response.data.navList[0].name
    //       that.dynamicValidateForm.indexHref = response.data.navList[0].href
    //       response.data.navList.splice(0, 1)
    //       that.dynamicValidateForm.domains = that.dynamicValidateForm.domains.concat(response.data.navList)
    //       console.log(that.dynamicValidateForm)
    //       return false
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style scoped>

.el-input {
  margin-right: 10px;
  width: 270px;
  vertical-align: top;
}
</style>
