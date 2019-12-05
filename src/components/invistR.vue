<template>
  <div style="width: 100%;height: 100%;overflow: hidden;">
    <div class="bg-content">
      <img src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/logo.png" alt="logo" class="logo">
      <div class="bg-img bg-img1"></div>
      <div class="bg-img bg-img2"></div>
      <div class="bg-img bg-img3"></div>
      <div class="bg-img bg-img4"></div>
      <img v-if="isType == 1" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/resultR1_4.png" alt="" class="result-img result-img-1">
      <img v-if="isType == 2" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/resultR5_9.png" alt="" class="result-img result-img-2">
      <img v-if="isType == 3" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/resultR9_12.png" alt="" class="result-img result-img-3">
      <img v-if="isType == 4" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/resultR13_15.png" alt="" class="result-img result-img-4">
      
      <img v-if="isType == 1" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/content1.png" alt="" class="content1">
      <img v-if="isType == 2" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/content2.png" alt="" class="content1">
      <img v-if="isType == 3" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/content3.png" alt="" class="content1">
      <img v-if="isType == 4" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/content4.png" alt="" class="content1">

      <div class="operate-area">
        <router-link to="/">
          <img class="operate-btn" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/icon_reset.png" alt="重新测试">
        </router-link>
        <img class="operate-btn" @click="showResult" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/icon_xiu.png" alt="秀一下">
      </div>
    </div>

    <div id="myCanvas" v-if="isShare">
      <div class="mask" @click="shareMask"></div>
      <div class="result_img_s">
        <img class="result_img_1" v-if="isType == 1" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/5.png" alt="1">
        <img class="result_img_1" v-if="isType == 2" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/6.png" alt="2">
        <img class="result_img_1" v-if="isType == 3" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/7.png" alt="3">
        <img class="result_img_1" v-if="isType == 4" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/8.png" alt="4">
        <div style="font-size: 17px;color: #FFF;">请长按图片保存分享到朋友圈</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posterImg: '',
      isShare: false,
      isType: ''
    }
  },

  created() {
    const scoreNum = this.$route.query.score;

    if (scoreNum >= 0 && scoreNum <= 3) {
      this.isType = 1
    } else if (scoreNum >= 4 && scoreNum <= 6) {
      this.isType = 2
    } else if (scoreNum >= 7 && scoreNum <= 9) {
      this.isType = 3
    } else {
      this.isType = 4
    }

    
    if(localStorage.getItem('score') != '' && localStorage.getItem('score') != 0 && localStorage.getItem('score') != null && localStorage.getItem('score') != undefined) {
      this.isShare = true;
    }

  },

  methods: {

    showResult() {
      this.isShare = true;
    },

    shareMask() {
      this.isShare = false;
    }
  }
}

</script>

<style scoped>
.bg-content .bg-img {
  display: block;
  height: 25%;
}

.bg-content .bg-img1 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result_bg1.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 0;
}

.bg-content .bg-img2 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result_bg2.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -0.1rem;
}

.bg-content .bg-img3 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result_bg3.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -0.3rem;
}

.bg-content .bg-img4 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result_bg4.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -0.4rem;
}


.logo {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  width: 6.7rem;
  height: 2.5rem;
}

.result-img {
  position: absolute;
  left: 4rem;
  top: 6rem;
  width: 75%;
}

/*定义一个名字为righteaseinAnimate动画，实现从页面的右边淡入页面效果*/
@keyframes righteaseinAnimate {
  0% {
    transform: translateX(2000px);
    opacity: 0;
  }

  /*在0%时设置文字在想X轴2000px位移处（右边），透明度为0，也就是看不见文字*/
  100% {
    transform: translateX(0px);
    opacity: 1;
  }

  /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
}

@-webkit-keyframes righteaseinAnimate {
  0% {
    -webkit-transform: translateX(2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-o-keyframes righteaseinAnimate {
  0% {
    -webkit-transform: translateX(2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-ms-keyframes righteaseinAnimate {
  0% {
    -webkit-transform: translateX(2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-moz-keyframes righteaseinAnimate {
  0% {
    -webkit-transform: translateX(2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

.result-img {
  animation: righteaseinAnimate 1s ease 1;
  -webkit-animation: righteaseinAnimate 1s ease 1;
  -moz-animation: righteaseinAnimate 1s ease 1;
  -ms-animation: righteaseinAnimate 1s ease 1;
  -o-animation: righteaseinAnimate 1s ease 1;

  /*规定动画的最后状态为结束状态*/
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}

/*定义一个名字为lefteaseinAnimate动画，实现从页面的左边淡入页面效果*/
@keyframes lefteaseinAnimate {
  0% {
    transform: translateX(-2000px);
    opacity: 0;
  }

  /*在0%时设置文字在想X轴-2000px位移处（左边），透明度为0，也就是看不见文字*/
  100% {
    transform: translateX(0px);
    opacity: 1;
  }

  /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
}

@-webkit-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-o-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-ms-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-moz-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}


.operate-btn {
  width: 12.6rem;
  height: 5rem;
  margin-bottom: .5rem;
}

.mask {
  background-color: #000;
  opacity: 0.9;
  position: absolute;
  z-index: 10000;
  top: 0;
  width: 100%;
  height: 100%;
}

.result_img_s {
  position: absolute;
  left: 50%;
  margin-left: -14rem;
  top: 50%;
  margin-top: -29rem;
  width: 28rem;
  height: 58rem;
  z-index: 10004;
}

.result_img_1 {
  width: 90%;
}

.content1 {
  position: absolute;
  left: 4rem;
  top: 60%;
  width: 75%;
  animation: lefteaseinAnimate 1s ease 1;
  -webkit-animation: lefteaseinAnimate 1s ease 1;
  -moz-animation: lefteaseinAnimate 1s ease 1;
  -ms-animation: lefteaseinAnimate 1s ease 1;
  -o-animation: lefteaseinAnimate 1s ease 1;

  /*规定动画的最后状态为结束状态*/
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}

</style>
