<template>
  <div>
    <template v-for="value in this.menuData">
      <el-submenu index="value.id" v-if="value.node">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">{{value.menu_name}}</span>
        </template>
        <MenuTree :menuData="value.node"></MenuTree>
      </el-submenu>
      <el-menu-item index="value.id" v-else>
        <i class="el-icon-message"></i>
        <span slot="title">{{value.menu_name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ['menuData'],
  name: 'MenuTree'
}
</script>
