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
                  <li v-for="(item, index) in tabnavBox" @contextmenu.prevent="openMenu(item,$event)" @click="tabnav(item)" :class="{active: $route.path == item.path}">
                    <router-link :to="item.path">{{item.title}}</router-link>
                    <i @click="removeTab(item)" class="el-icon-error" v-if="index != 0"></i>
                  </li>
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
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="menuBox">
      <li @click="removeTab(rightNav)">关闭</li>
      <li @click="removeOtherTab(rightNav)">关闭其他</li>
      <li @click="removeAllTab">全部关闭</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dc-home',
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      isCollapse: false,
      uniquerouter: true,
      editableTabsValue: '1',
      isActive: '/index',
      rightNav: {},
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
  watch: {
    visible (value) {
      if (value) {
        document.body.addEventListener('click', () => { this.visible = false })
      } else {
        document.body.removeEventListener('click', () => { this.visible = false })
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
    openMenu (item, e) {
      this.visible = true
      this.rightNav = item
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.left = e.clientX - offsetLeft + 15
      this.top = e.clientY
    },
    addTab (title, path) {
      // debugger
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
      console.log(this.isActive)
      debugger
      let index = this.tabnavBox.findIndex(function (value, key) {
        return value.path == tabItem.path
      })
      this.tabnavBox.splice(index, 1)
      if (tabItem.path == this.$route.fullPath){
        let tabActive = this.tabnavBox[index] || this.tabnavBox[index - 1]
        this.$router.push(tabActive.path)
      }
      console.log(this.isActive)
    },
    removeOtherTab (tabItem) {
      this.tabnavBox = [{
        title: '首页',
        path: '/index'
      }]
      this.tabnavBox.push(tabItem)
      this.$router.push(tabItem.path)
    },
    removeAllTab () {
      this.tabnavBox = [{
        title: '首页',
        path: '/index'
      }]
      this.$router.push('/index')
    },
    tabnav (defaul) {
      this.isActive = defaul.path
    }
  },
  created () {
    this.$router.push('/index')
  },
  computed: {
    isActivee () {
      return this.$route.path
    }
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
  %w100{
    width: 100%;
  }
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
    @extend %w100;
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
        margin-#{$top}: 6px;
        margin-#{$right}: 5px;
        padding-#{$right}: 10px;
        border: 1px solid #cccccc;
        a{
          @include set-value(padding, 13px);
          display: inline-block;
          @extend %h100;
          font-size: 12px;
          color: #999999;
        }
        &:nth-child(n+2){
          a{
            padding-#{$right}: 15px;
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
  .menuBox{
    margin: 0;
    background: #fff;
    z-index: 999;
    position: absolute;
    padding: 5px 0;
    border: 1px solid #cccccc;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #e1e6ea;
      }
    }
  }

</style>
