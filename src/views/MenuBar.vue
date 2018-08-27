<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="menu-Bar" :collapse="isCollapse">
      <MenuTree :menuData="this.menuData"></MenuTree>
    </el-menu>
  </div>
</template>
<script>
import MenuTree from '@/views/MenuTree'

export default {
  data () {
    return {
      isCollapse: false,
      menuData: [{
        'id': 1,
        'parent_id': 0,
        'menu_name': '第一级菜单 1',
        'sorting': 0,
        'node': [
          {
            'id': 2,
            'parent_id': 1,
            'menu_name': '第二级菜单 1-1',
            'sorting': 0,
            'node': [
              {
                'id': 3,
                'parent_id': 2,
                'menu_name': '第三级菜单 1-1-1',
                'sorting': 1
              }
            ]
          }
        ]
      },
        {
          'id': 4,
          'parent_id': 0,
          'menu_name': '第一级菜单 2',
          'sorting': 0,
          'node': [
            {
              'id': 5,
              'parent_id': 4,
              'menu_name': '第二级菜单 2-1',
              'sorting': 0
            }
          ]
        }]
    }
  },
  props: ['apiUrl'],
  created: function () {
    //this.getMenu()
  },
  methods: {
    // getMenu: function () {
    //   this.$http.get(this.apiUrl + 'menu').then(function (response) {
    //     this.menuData = response.data
    //   }, function (error) {
    //     console.log(error)
    //   })
    // }
  },
  components: {
    'MenuTree': MenuTree
  }
}
</script>
<style>
  .menu-Bar:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
