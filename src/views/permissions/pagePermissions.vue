<template>
  <div>
    <el-radio v-model="permissions" label="superAdmin" border>超级管理员</el-radio>
    <el-radio v-model="permissions" label="admin" border>管理员</el-radio>
    <el-radio v-model="permissions" label="ordinary" border>普通用户</el-radio>
    <div style="margin: 50px 0px;">
      [权限:  "{{options.permissions}}",    角色:   "{{options.role}}"]
    </div>
    <h3>需要权限的目录：</h3>
    <p>“上传”：["超级管理员"]</p>
    <p>“编辑器”：["超级管理员", “管理员”’]</p>
    <p>“系统设置”：["超级管理员"]</p>
  </div>
</template>

<script>
  export default {
    name: 'pagePermissions',
    data () {
      return {
        permissions: this.$store.getters.info.role,
        options: {
          role: this.$store.getters.info.role,
          permissions: this.$store.getters.info.permissions,
        }
      };
    },
    mounted (){
      this.$store.dispatch('setRole', this.options)
    },
    watch: {
      permissions (newQuestion, oldQuestion) {
        switch (newQuestion) {
          case 'superAdmin':
            this.options = {
              role: 'superAdmin',
              permissions: '超级管理员'
            }
            break
          case 'admin':
            this.options = {
              role: 'admin',
              permissions: '管理员'
            }
            break
          case 'ordinary':
            this.options = {
              role: 'ordinary',
              permissions: '普通用户'
            }
        }
        this.$store.dispatch('setRole', this.options)

        //  刷新 tabnav 权限管理测试需要
        this.$store.dispatch('removeOtherTab', {tabItem: {
            title: 'pageControl',
            path: '/pagePermissions'
          }, router: this.$router})
      }
    }
  }
</script>

<style scoped>
p{
  margin: 20px 0px;
}
</style>
