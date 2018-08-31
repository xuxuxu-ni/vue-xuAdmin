<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="card kjfs">
            <p class="title">快捷方式1</p>
            <ul>
              <li><router-link to="#" class="kjfs kjfs-bluee"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
              <li><router-link to="#" class="kjfs kjfs-pinkk"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
              <li><router-link to="#" class="kjfs kjfs-yelloww"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
            </ul>
            <ul>
              <li><router-link to="#" class="kjfs kjfs-grennn"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
              <li><router-link to="#" class="kjfs kjfs-purplee"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
              <li><router-link to="#" class="kjfs kjfs-lightBluee"><span><i class="fa fa-hand-o-up fa-2x"></i></span><span>新闻</span></router-link></li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="card dbsx">
            <p class="title">待办事项</p>
            <ul>
              <li><router-link to="#"><span>待审评论</span><span class="num">66</span></router-link></li>
              <li><router-link to="#"><span>待审帖子</span><span class="num">66</span></router-link></li>
            </ul>
            <ul>
              <li><router-link to="#"><span>待审商品</span><span class="num">66</span></router-link></li>
              <li><router-link to="#"><span>代发货</span><span class="num">66</span></router-link></li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="card bbxx">
            <p class="title">版本信息</p>
            <div class="table">
              <p><span class="tit">当前版本</span>v1.0.0 pro</p>
              <p><span class="tit">基于框架</span>element 2.4.6</p>
              <p><span class="tit">主要特色</span>单页面 / 响应式 / 清爽 / 极简</p>
              <p><span class="tit">获取渠道</span>
                  <span class="gitbox">
                    <router-link to="https://github.com/"><el-button type="primary" icon="el-icon-download" size="small">github</el-button></router-link>
                    <router-link to="https://github.com/"><el-button type="primary" icon="el-icon-download" size="small">码云</el-button></router-link>
                  </span>
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style lang="scss">
  $top:top;
  $bottom:bottom;
  $left:left;
  $right:right;
  $leftright: ($left, $right);
  $pinkk: #eec2d3;
  $bluee: #409eff;
  $yelloww: #f4d884;
  $grennn: #89dda0;
  $purplee: #78a2ea;
  $lightBluee: #b8d6ff;

  $list: bluee pinkk yelloww grennn purplee lightBluee;
  $list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }
  .card{
    color: #666;
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    .title{
      font-size: 14px;
      padding: 10px;
    }
    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            margin: 10px;
          }
          .num{
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 20px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 100px;
          min-width: 80px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 30px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }
</style>
