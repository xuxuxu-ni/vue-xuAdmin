<template>
  <div id="app">
    <el-container>
        <el-header id="header">
          <p class="topName">xucms后台模板</p>
        </el-header>
        <el-container>
            <el-aside id="asideNav">
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="selectmenu" :collapse="isCollapse" background-color="#eef1f6" text-color="#48576a" active-text-color="#ffffff" :router= "uniquerouter" :unique-opened= "uniquerouter">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''">
                            <template slot="title">
                                <i :class="item.iconCls"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <template v-for="child in item.children">
                                <el-submenu v-if="child.children.length>0" :index="child.path">
                                  <template slot="title">
                                    <i :class="item.iconCls"></i>
                                    <span slot="title">{{child.name}}</span>
                                  </template>
                                    <el-menu-item v-for="threeChild in child.children" :index="threeChild.path">{{threeChild.name}}</el-menu-item>
                                </el-submenu>

                                <el-menu-item v-else :index="child.path">
                                    <i :class="item.iconCls"></i>
                                    <span slot="title">{{child.name}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="item.children[0].path" v-else>
                            <i :class="item.iconCls"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item>
                    </template>

                </el-menu>
            </el-aside>
            <el-container>
              <div class="tabnavBox">
                <ul>
                  <li v-for="(item, index) in tabnavBox" @click="tabnav(item)" :class="{active:isActive == item.path}"><router-link :to="item.path">{{item.title}}</router-link><i @click="removeTab(item)" class="el-icon-error" v-if="index != 0"></i></li>
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
import router from '../router/index'
export default {
  name: 'dc-home',
  data () {
    return {
      isCollapse: false,
      uniquerouter: true,
      editableTabsValue: '1',
      isActive: '/index',
      // menus:router,
      editableTabs: [{
        title: '首页',
        name: '1',
        closable: false
      }],
      defaultActive: '/index',
      tabIndex: 1,
      tabnavBox: [
        {
          title: '首页',
          path: '/index'
        }
      ]
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
    selectmenu (key, index) {
      // console.log(this.$route)
      // console.log(this.$router)
      console.log(key, index)
      var router = this.$router.options.routes
      let name = ''
      var navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].children.length > 0 || routerARR[i].path == path) {
            if (routerARR[i].path == path && routerARR[i].children.length < 1) {
              // debugger
              name = routerARR[i].name
              console.log(name)
              break
            }
            navTitle(path, routerARR[i].children)
          }
        }
        return name
      }
      this.addTab(navTitle(key, router), key)
    },
    addTab (title, path) {
      //debugger
      this.isActive = path
      for (var i = 0; i < this.tabnavBox.length; i++) {
        if (this.tabnavBox[i].path === path) {
          return false
        }
      }
      this.tabnavBox.push({
        title: title,
        path: path
      })
    },
    removeTab (tabItem) {
      console.log(this.isActive);
      debugger
      for (let i = 0; i < this.tabnavBox.length; i++) {
        if (this.tabnavBox[i].title == tabItem.title) {
          this.tabnavBox.splice(i,1);
          let tabActive = this.tabnavBox[i] || this.tabnavBox[i-1];
          this.isActive = tabActive.path;
          break
        }
      }
      console.log(this.isActive);
    },
    tabClick (VueComponent) {
      console.log(VueComponent)
      for (var i = 0; i < this.editableTabs.length; i++) {
        if (VueComponent.name == this.editableTabs[i].name) {
          this.defaultActive = this.editableTabs[i].path
          return false
        }
      }
    },
    tabnav (defaul) {
      this.isActive = defaul.path
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
  %h100{
    height: 100%;
  }
  html,body,#app,.el-container,#asideNav,ul.el-menu{
    @extend %h100;
  }
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
  #asideNav{
    width: 180px !important;
    overflow-x: hidden;
    .el-menu-item{
      background-color: #e1e6ea !important;
      border-bottom: 1px solid #dddddd;
      &:hover{
        background-color: #bec1c5 !important;
      }
    }
    .el-menu-item.is-active{
      background-color: #56a9ff !important
    }
  }
  .tabnavBox{
    width: 100%;
    height: 44px;
    overflow: hidden;
    border-#{$top}: 1px solid #cccccc;
    border-#{$bottom}: 1px solid #cccccc;
    ul{
      display: flex;
      justify-content: flex-start;
      padding-#{$left}: 20px;
      li{
        height: 30px;
        line-height: 31px;
        cursor: pointer;
        @include set-value(padding, 13px);
        margin-#{$top}: 6px;
        margin-#{$right}: 5px;
        border: 1px solid #cccccc;
        a{
          font-size: 12px;
          color: #999999;
        }
        &:nth-child(n+2){
          a{
            margin-#{$right}: 15px;
          }
        }
        i{
          cursor: pointer;
          &:hover{
            color: red;
          }
        }
      }
      li.active{
        background: #409eff;
        color: #ffffff;
        a{
          color: #ffffff;
        }
      }
    }
  }

</style>
