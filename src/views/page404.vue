<template>
  <div class="page404">
    <div class="i404">
      <img src="../assets/img404/i404.png"/>
      <p>您的访问页面可能被删除或者不存在</p>
      <p>请勿乱给本站的程序提交非法参数</p>
      <a href="/">返回首页</a>
    </div>
    <div class="sign">
      <img src="../assets/img404/sign.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "page404",
  mounted () {
  }
}
</script>

<style lang="scss">
  .page404{
    width: 100%;
    height: 100%;
    background: url("../assets/img404/bg404.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    & >div{
      width: 50%;
      height: 100%;
     }
    .i404{
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 500px;
        height: 200px;
        margin-top: -100px;
      }
      p{
        font-size: 20px;
        color: #3d95ff;
        margin-top: 2px;
      }
      a{
        display: block;
        width: 150px;
        height: 50px;
        color: #ffffff;
        background: #56a9ff;
        margin-top: 35px;
        line-height: 50px;
        text-align: center;
        border-radius: 50px;
        font-size: 18px;
      }
    }
    .sign{
      float: right;
      img{
        width: 600px;
        margin-top: 50px;
        margin-left: 50px;
      }
    }
  }

</style>
