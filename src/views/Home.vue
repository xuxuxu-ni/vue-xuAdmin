<template>
  <div id="app">
    <el-container>
      <div id="asideNav">
        <div class="logo-name">
          <p v-if="logoShow">XU</p>
          <p v-else>xuAdmin后台模板</p>
        </div>
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
                   @select="selectmenu"
                   @open="handleOpen"
                   :collapse="isCollapse"
                   background-color="#03152A"
                   text-color="rgba(255,255,255,.7)"
                   active-text-color="#ffffff"
                   :router= "uniquerouter"
                   :unique-opened= "uniquerouter"
                   :collapse-transition= "true"
          >
              <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                  <el-submenu v-if="!item.alone && item.children.length>0" :index="index+''">
                      <template slot="title">
                          <i :class="item.iconCls?item.iconCls:[fa,fa-server]"></i>
                          <span slot="title">{{item.name}}</span>
                      </template>

                    <menu-tree :menuData="item.children"></menu-tree>

                  </el-submenu>
                  <el-menu-item :index="item.path" v-else>
                      <i :class="item.iconCls?item.iconCls:[fa,fa-file]"></i>
                      <span slot="title">{{item.name}}</span>
                  </el-menu-item>
              </template>

          </el-menu>
      </div>
      <el-container>
        <el-header id="header">
          <span class="hideAside" @click="collapse"><i class="fa fa-indent fa-lg"></i></span>
          <ul class="personal">
            <li class="fullScreen" @click="fullScreen"> <el-tooltip class="item" effect="dark" content="全屏" placement="bottom"><i class="fa fa-arrows-alt fa-lg"></i></el-tooltip></li>
            <li>超级管理员</li>
            <li>
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    夏洛克丶旭<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">基本资料</el-dropdown-item>
                    <el-dropdown-item command="b">修改密码</el-dropdown-item>
                    <el-dropdown-item command="e" divided>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li class="icon"><img src="/static/images/icon.jpg" /> </li>
          </ul>
        </el-header>
        <div class="tabnavBox" ref="tabnavbox">
          <ul ref="tabnavul">
            <li v-for="(item, index) in tabnavBox" @contextmenu.prevent="openMenu(item,$event,index)" @click="tabnav(item)" :class="{active: $route.path == item.path}">
              <router-link :to="item.path">{{item.title}}</router-link>
              <i @click="removeTab(item)" class="el-icon-error" v-if="index != 0"></i>
            </li>
          </ul>
        </div>
        <el-main id="elain">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>
          <Bottom></Bottom>
        </el-footer>
      </el-container>
    </el-container>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="menuBox">
      <li @click="removeTab(rightNav)"><i class="fa fa-remove"></i>关闭</li>
      <li @click="removeOtherTab(rightNav)">关闭其他</li>
      <li @click="removeAllTab">全部关闭</li>
    </ul>
  </div>
</template>

<script>
import Bottom from '../components/Footer/bottom'
import menuTree from '../components/menuTree/menuTree'
export default {
  name: 'dc-home',
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      tableft: 0,
      isCollapse: false,
      isfullScreen: true,
      logoShow: false,
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
  components: {
    Bottom,
    menuTree
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
    collapse () {
      let that = this
      this.isCollapse = !this.isCollapse
      if (this.logoShow) {
        setTimeout(function () {
          that.logoShow = false
        }, 300)
      } else {
        this.logoShow = true
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    selectmenu (key, index) {
      console.log(this.$route)
      console.log(this.$router)
      // console.log(this.$refs.tabnavul.getBoundingClientRect().width)
      console.log(key, index)
      if (this.$refs.tabnavul.getBoundingClientRect().width >= this.$refs.tabnavbox.getBoundingClientRect().width) {

      }
      var router = this.$router.options.routes
      let name = ''
      var navTitle = function (path, routerARR) {
        for (let i = 0; i < routerARR.length; i++) {
          if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
            if (routerARR[i].path === path && routerARR[i].children.length < 1) {
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
    openMenu (item, e, index) {
      if (index == 0) {
        return false
      }
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
      if (tabItem.path == this.$route.fullPath) {
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
    },
    fullScreen () {
      if (this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.isfullScreen = false
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = true
      }
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
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
    background-color: #f2f2f2;
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
  %cursor{
    cursor: pointer;
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
    max-height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    display: flex;
    justify-content: space-between;
    .hideAside{
      @extend %cursor;
    }
    .personal{
      display: flex;
      flex-direction: row;
      li{
        @include set-value(margin, 15px);
        font-size: 12px;
      }
      .fullScreen{
        @extend %cursor;
      }
      .el-dropdown-link {
        @extend %cursor;
      }
      .icon img{
        margin-#{$top}: 7px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
         width: 40px;
         height: 40px;
       }
    }
  }
  #asideNav{
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
    .logo-name{
      color: rgba(255,255,255,.8);
      background-color: #03152A !important;
      @extend %w100;
      font-weight: 300;
      z-index: 999;
      p{
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      height: 100%;
    }
    .el-menu{
      flex: 1;
      overflow: inherit;
      border-right: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .el-menu-item{
        background-color: #020f1d !important;
        border-bottom: 1px solid #020f1d;
        &:hover{
          color: #ffffff !important;
          background-color: #375573 !important;
        }
      }
      .el-menu-item.is-active{
        background-color: #56a9ff !important
      }
      .is-opened>.el-submenu__title>.el-icon-arrow-down{
        color: #ffffff;
        font-weight: 500;
        font-size: 18px;
      }
    }

  }
  #elmain{
    background-color: #f0f2f5;
  }
  .tabnavBox{
    @extend %w100;
    height: 42px;
    min-height: 42px;
    overflow: hidden;
    border-#{$top}: 1px solid #f6f6f6;
    border-#{$bottom}: 1px solid #d8dce5;

    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    ul{
      display: flex;
      justify-content: flex-start;
      padding-#{$left}: 20px;
      flex-wrap: nowrap;
      overflow-x: auto;
      li{
        height: 30px;
        line-height: 31px;
        @extend %cursor;
        margin-#{$top}: 6px;
        margin-#{$right}: 5px;

        border: 1px solid #cccccc;

        overflow: hidden;
        &:not(:first-child){
          padding-#{$right}: 10px;
          min-width: 80px;
        }
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
          @extend %cursor;
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
      @extend %cursor;
      &:hover {
        background: #e1e6ea;
      }
    }
  }

</style>
