<template>
  <div>
    <h3>框架内置了element ui和Font Awesome两种图标库</h3>
    <p class="text"><span class="name">element ui图标</span>使用方法直接通过设置类名为 el-icon-iconName 来使用即可。例如：<span class="code">&lt;i class="el-icon-edit"&gt;&lt;/i&gt;</span></p>
    <ul class="ele-icoo">
      <li>
        <span>
          <i class="el-icon-download"></i>
          <span class="iconame">el-icon-download</span>
        </span>
      </li>
      <li>
        <span>
          <i class="el-icon-loading"></i>
          <span class="iconame">el-icon-loading</span>
        </span>
      </li>
      <li>
        <span>
          <i class="el-icon-setting"></i>
          <span class="iconame">el-icon-setting</span>
        </span>
      </li>
      <li>
        <span>
          <a target="_blank" href="http://element-cn.eleme.io/#/zh-CN/component/icon">更多element ui图标</a>
        </span>
      </li>
    </ul>
    <div style="clear: both"></div>
    <p class="text"><span class="name">Font Awesome图标</span>本框架已经内置该图标库675个图标,不需要另外引入安装,可以直接使用,使用方法直接通过设置类名为 'fa fa-iconName' 来使用即可。例如：<span class="code">&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;</span>
    <p class="text">使用 fa-lg (33%递增)、fa-2x、 fa-3x、fa-4x，或者 fa-5x 类 来放大图标,例如：<span class="code">&lt;i class="fa fa-camera-retro fa-2x"&gt;&lt;/i&gt;</span></p>
    <p class="text">更多功能及用法点击 <a target="_blank" href="http://fontawesome.dashgame.com/#basic"><strong>此处</strong></a> </p>
    <div>
      <ul class="ele-icoo">
        <li>
          <span>
            <i class="fa fa-power-off"></i>
            <span class="iconame">power-off</span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa fa-server"></i>
            <span class="iconame">server</span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa fa-tags"></i>
            <span class="iconame">tags</span>
          </span>
        </li>
        <li>
          <span>
            <a target="_blank" href="http://fontawesome.dashgame.com/">更多Font Awesome图标</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss">
  .name{
    font-size: 26px;
    color: #666666;
    display: block;
    margin-bottom: 10px;
    margin-top: 24px;
  }
  .code{
    background-color: #e5e8ec;
    padding: 0 4px;
    border: 1px solid #ced1dc;
    border-radius: 4px;
  }
  .text{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 5px 0px;
  }
  .ele-icoo{
    max-width: 100%;
    li{
      float: left;
      width: 12.5%;
      text-align: center;
      height: 120px;
      line-height: 120px;
      color: #666;
      font-size: 13px;
      transition: color .15s linear;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      span{
        display: inline-block;
        line-height: normal;
        vertical-align: middle;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        color: #99a9bf;
        i{
          display: block;
          font-size: 32px;
          margin-bottom: 15px;
          color: #606266;
          code{
            display: inline-block;
            padding: 0 3px;
            height: 1em;
            color: #606266;
          }
        }
      }
    }
  }
</style>
