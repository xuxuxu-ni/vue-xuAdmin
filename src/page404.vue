<template>
  <div class="page404">
    <div class="code">
      <p>ERROR 404</p>
      <p>访问资源未找到</p>
    </div>
    <div class="road">
      <div class="shadow">
        <div class="shelt">
          <div class="head">
            <div class="eyes">
              <div class="lefteye">
                <div class="eyeball"></div>
                <div class="eyebrow"></div>
              </div>
              <div class="righteye">
                <div class="eyeball"></div>
                <div class="eyebrow"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="hat"></div>
        <div class="bubble">
          <a href="/">返回主页?</a>
        </div>
      </div>
      <p>PAGE NOT FOUND</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'page404',
  mounted () {
    var parallel = 17
    var headHeight = 150
    var opacity = 0
    var eyeBrowHeight = 0
    var step = 1
    var timer_show
    var timer_eyebrow

    document.onmousemove = mouseMove

    function mouseMove (e) {
      /* 眼球转动 */
    }

    function startAnimation () {
      timer_show = setInterval(function () {
        parallel = parallel - 0.3
        headHeight = headHeight - 2.5
        opacity = (17 - parallel) / 17
        if (parallel > 0) {
          $('.head').css('top', headHeight + 'px')
          $('.hat').css('transform', 'rotate(' + parallel + 'deg)')
          $('.bubble').css('opacity', opacity)
        } else {
          window.clearInterval(timer_show)
          timer_eyebrow = setInterval(function () {
            eyeBrowHeight += step
            $('.lefteye .eyebrow').css('clip', 'rect(0px 38px ' + eyeBrowHeight + 'px 0px)')
            $('.righteye .eyebrow').css('clip', 'rect(0px 38px ' + eyeBrowHeight + 'px 0px)')
            if (eyeBrowHeight % 19 === 0) { step = -step }
          }, 10)
        }
      }, 55)
      window.setTimeout(function () {
        window.clearInterval(timer_eyebrow)
        timer_show = setInterval(function () {
          parallel = parallel + 0.3
          headHeight = headHeight + 2.5
          opacity = (17 - parallel) / 17
          if (parallel <= 17) {
            $('.head').css('top', headHeight + 'px')
            $('.hat').css('transform', 'rotate(' + parallel + 'deg)')
            //		$('.code p').css('opacity',opacity);
            $('.bubble').css('opacity', opacity)
          } else {
            window.clearInterval(timer_show)
            startAnimation()
          }
        }, 55)
      }, 1000 * 6)
    }

    startAnimation()
  }
}
</script>

<style scoped>
  body, div, p, a{
    margin: 0px;
    padding: 0px;
  }

  p{
    text-decoration: none;
    user-select: none;
  }

  html, body{
    width: 100%;
    height: 100%;
  }

  .page404{
    background: linear-gradient(#c7c8cf,#e8e8e9,#c7c8cf) !important;
    overflow: hidden;
  }

  .code{
    display: block;
    width: 100%;
    height: 120px;
    line-height: 120px;
  }

  .code p{
    height: inherit;
    line-height: inherit;
    text-align: center;
    font-family: BalboaWide Bold;
    font-size: 50px;
    color: #697a8a;
    opacity: 1;
  }

  .road{
    width: 100%;
    height: 600px;
  }

  .road .shadow{
    position: relative;
    margin: auto;
    margin-top: 25%;
    width: 330px;
    height: 70px;
    border:0px;
    background: linear-gradient(#777373,#3c3c3c);
    box-shadow: 0px 3px 10px 2px #464646, 0px -3px 10px 2px #3a3939 inset;
    border-radius: 100%;
  }

  .road p{
    display: block;
    margin-top: 50px;
    height: inherit;
    line-height: inherit;
    text-align: center;
    font-family: BalboaWide Bold;
    font-size: 30px;
    color: #697a8a;
    opacity: 1;
  }
  .road .shadow .bubble{
    display: block;
    position: absolute;
    top: -180px;
    left: 350px;
    width: 246px;
    height: 179px;
    background-image: url(assets/img404/bubble.png);
    background-repeat: no-repeat;
    text-align: center;
  }

  .road .shadow .bubble a{
    line-height: 140px;
    font-family: "microsoft yahei";
    font-size: 1.5em;
    color: #F8F8F5;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 1s;
    user-select:none;
  }

  .road .shadow .bubble a:hover{
    color: #FF8C00;
  }

  .road .shadow .shelt{
    position: absolute;
    margin: auto;
    margin-top: -80px;
    width: 330px;
    height: 150px;
    border:0px;
    border-radius: 100%;
    overflow: hidden;
    background: transparent;
  }
  .road .shadow .head{
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: 150px;
    width: 120px;
    height: 300px;
    border: 0px;
    border-radius: 100% 100% 0 0;
    background-color: #292d38;
  }

  .road .shadow .head .eyes{
    width: 100%;
    height: 50px;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  .road .shadow .head .eyes .lefteye,.road .shadow .head .eyes .righteye{
    position: relative;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    background-color: #f1f2f4;
  }

  .road .shadow .head .eyes .lefteye .eyebrow{
    position: absolute;
    width: 38px;
    left: 0px;
    top: 0px;
    height: 19px;
    border-radius: 19px 19px 0 0;
    background-color:#4c5465;
    clip: rect(0px 38px 0px 0px);
  }

  .road .shadow .head .eyes .righteye .eyebrow{
    position: absolute;
    width: 38px;
    left: 0px;
    top: 0px;
    height: 19px;
    border-radius: 19px 19px 0 0;
    background-color:#4c5465;
    clip: rect(0px 38px 0px 0px);
  }

  .road .shadow .head .eyes .lefteye .eyeball{
    position: absolute;
    width: 10px;
    left: 50%;
    top: 50%;
    margin-top: -5px;
    margin-left: -5px;
    height: 10px;
    border-radius: 100%;
    background-color:#292d38 ;
  }

  .road .shadow .head .eyes .righteye .eyeball{
    position: absolute;
    width: 10px;
    left: 50%;
    top: 50%;
    margin-top: -5px;
    margin-left: -5px;
    height: 10px;
    border-radius: 100%;
    background-color:#292d38 ;
  }

  .road .shadow .hat{
    position: absolute;
    top: -297px;
    left: -8px;
    width: 330px;
    height: 330px;
    background: url(assets/img404/sign.png) no-repeat;
    transform-origin: left bottom;
    transform: rotate(17deg);
  }

</style>
