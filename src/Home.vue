<template>
  <div id="app">
    <el-container>
        <el-header id="header">
          <p class="topName">xucms后台模板</p>
        </el-header>
        <el-container>
            <el-aside id="asideNav">
                <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="selectmenu" :collapse="isCollapse" background-color="#222d32" text-color="#ffffff" :router="true">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu v-if="item.children.length>0" :index="index+''">
                            <template slot="title">
                                <i :class="item.iconCls"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <template v-for="child in item.children">
                                <el-submenu v-if="child.children.length>0" :index="child.path">
                                    <span slot="title">{{child.name}}</span>
                                    <el-menu-item v-for="threeChild in child.children" :index="threeChild.path">{{threeChild.name}}</el-menu-item>
                                </el-submenu>

                                <el-menu-item v-else :index="child.path">
                                    <i :class="item.iconCls"></i>
                                    <span slot="title">{{child.name}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="item.path" v-else>
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item>
                    </template>

                </el-menu>
            </el-aside>
            <el-container>
              <div class="tabnavBox">
                <ul>
                  <li><a href="#">首页</a><i class="el-icon-error"></i></li>
                  <li><a href="#">新闻</a><i class="el-icon-error"></i></li>
                  <li><a href="#">用户</a><i class="el-icon-error"></i></li>
                  <li><a href="#">用户用户</a><i class="el-icon-error"></i></li>
                  <li><a href="#">用户用户</a><i class="el-icon-error"></i></li>
                  <li><a href="#">用户用户用户</a><i class="el-icon-error"></i></li>
                </ul>
              </div>
                <el-main>

                  <transition name="fade" mode="out-in">
                    <router-view></router-view>
                  </transition>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
  </div>
</template>

<script>
// import router from './router'
export default {
  name: 'dc-home',
  data () {
    return {
      isCollapse: false,
      editableTabsValue: '1',
      // menus:router,
      editableTabs: [{
        title: '首页',
        name: '1',
        closable: false
      }],
      defaultActive: '',
      tabIndex: 1,
      navtabs: {
        '/index': '首页',
        '/table': '表格',
        '/select': '选择',
        '/form': '表单'
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$route)
      console.log(this.$router)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectmenu (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$route)
      console.log(this.$router)
      // var thisRouter = keyPath.join()
      this.addTab(key)
    },
    addTab (targetName) {
      for (var i = 0; i < this.editableTabs.length; i++) {
        if (this.navtabs[targetName] == this.editableTabs[i].title) {
          this.editableTabsValue = this.editableTabs[i].name
          return false
        }
      }

      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: this.navtabs[targetName],
        name: newTabName,
        path: targetName
      })
      this.editableTabsValue = newTabName

      // for(var k = 0;k <  menu.length; k++){
      //     if( this.navtabs[targetName] == menu[k].name ){
      //       let newTabName = ++this.tabIndex + '';
      //       this.editableTabs.push({
      //         title: this.navtabs[targetName],
      //         name: newTabName,
      //         path: targetName,
      //         content:menu[k].component,
      //         content:"wqwq"
      //       });
      //       this.editableTabsValue = newTabName;
      //     }
      // }
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    tabClick (VueComponent) {
      console.log(VueComponent)
      for (var i = 0; i < this.editableTabs.length; i++) {
        if (VueComponent.name == this.editableTabs[i].name) {
          this.defaultActive = this.editableTabs[i].path
          return false
        }
      }
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
  *{
    margin: 0px;
    padding: 0px;
  }
  body{
    font-size: 14px;
    color: #333333;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }
  #header{
      max-height: 60px;
      background: #409EFF;
    .topName{
      color: #ffffff;
      height: 60px;
      line-height: 60px;
      margin-left: 20px;
    }
  }
  .tabnavBox{
    width: 100%;
    height: 47px;
    overflow: hidden;
    border-#{$top}: 1px solid #cccccc;
    border-#{$bottom}: 1px solid #cccccc;
    ul{
      display: flex;
      justify-content: flex-start;
      height: 50px;
      line-height: 50px;
      padding-#{$left}: 20px;
      li{
        height: 30px;
        line-height: 31px;
        @include set-value(padding, 10px);
        @include set-value(margin, 10px);
        margin-#{$top}: 6px;
        border: 1px solid #cccccc;
      }
    }
  }

</style>
