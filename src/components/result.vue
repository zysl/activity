<template>
  <div style="width: 100%;height: 100%;overflow: hidden;">
    <div class="bg-content">
      <img src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/logo.png" alt="logo" class="logo">
      <div class="bg-img bg-img1"></div>
      <div class="bg-img bg-img2"></div>
      <div class="bg-img bg-img3"></div>
      <div class="bg-img bg-img4"></div>
      <img v-if="isType == 1" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result1_4.png" alt="" class="result-img result-img-1">
      <img v-if="isType == 2" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result5_8.png" alt="" class="result-img result-img-2">
      <img v-if="isType == 3" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result9_12.png" alt="" class="result-img result-img-3">
      <img v-if="isType == 4" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/result13_15.png" alt="" class="result-img result-img-4">
      <div class="result-text" v-html="resultArr[isType - 1].content"></div>

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
        <img class="result_img_1" v-if="isType == 1" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/1.png" alt="1">
        <img class="result_img_1" v-if="isType == 2" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/2.png" alt="2">
        <img class="result_img_1" v-if="isType == 3" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/3.png" alt="3">
        <img class="result_img_1" v-if="isType == 4" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/result/4.png" alt="4">
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
      url: '',
      isType: '',
      resultArr: [{
        'content': '<p>服务型理财师，在为客户考虑的时候，给你带来满足感。</p><p>服务型理财师是社交生活里不可缺少的“润滑剂”，他们不是社交型，但却是社交生活中不可缺少的部分。格外的奉献，不计较得失，什么都为客户着想，讨人喜欢如果有客户请他吃一顿饭，他会恨不得多请回去几次。同时，他们往往也不会去拒绝客户的请求，只要有人用得到他，都会出手相助。</p>'
      }, {
        'content': '<p>社交型理财师，被很多人视为完美型理财师。</p><p>社交型理财师的销售过程往往充满乐趣，他们会加上骑马、高尔夫球等一些社交活动。整个过程简单而且轻松，他们与客户朋友般的彼此相待。轻松愉悦中就能完成销售行为。</p><p>此类理财师擅长与客户的互动。同时，资源多，人脉广，总能为自己的客户带去更多的附加价值。</p>'
      }, {
        'content': '<p>严谨型理财师，做事井井有条，销售行为谨慎，对细节非常注意。</p><p>擅长理论，精于分析，是他们的特点。同时，他们自我控数能力强，重分析胜于感情，重秩序，乃至拘束。他们会时刻要求自己销售产品的安全性，如果不是自己认可的产品，哪怕再诱人，也会尽量避免销售。</p>'
      }, {
        'content': '<p>领导型理财师，性格坚决果断，做事雷厉风行，喜欢直接切入重点，提供解決方案。</p><p>领导型理财师，外表及销售行动专业，他们讲求快速行动，以及快的结果。与客户的每一次交流，都做好了周全的准备，不过度推销，更不会浪费彼此的时间。很少与客户发展什么私人情谊，但是对客户本身及其需求而言，他的专业总能得到百分之百的信任。</p>'
      }]
    }
  },

  created() {
    const scoreNum = this.$route.query.score;

    console.log(localStorage.getItem('score'))

    if (scoreNum >= 0 && scoreNum <= 4) {
      this.isType = 1
    } else if (scoreNum >= 5 && scoreNum <= 8) {
      this.isType = 2
    } else if (scoreNum >= 9 && scoreNum <= 12) {
      this.isType = 3
    } else {
      this.isType = 4
    }

    if(!(localStorage.getItem('score') != '' && localStorage.getItem('score') != 0 && localStorage.getItem('score') != null && localStorage.getItem('score') != undefined) && localStorage.getItem('isShare') != 1) {
      this.isShare = true;
    }

  },

  methods: {

    showResult() {
      this.isShare = true;
    },

    shareMask() {
      if(localStorage.getItem('score') != '' && localStorage.getItem('score') != 0 && localStorage.getItem('score') != null && localStorage.getItem('score') != undefined && localStorage.getItem('isShare') == 1) {
        this.isShare = false;
      }
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


.bg-content .share-img1 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/share_bg1.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 0;
}

.bg-content .share-img2 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/share_bg2.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -0.1rem;
}

.bg-content .share-img3 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/share_bg3.png) center no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -0.3rem;
}

.bg-content .share-img4 {
  background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/result/share_bg4.png) center no-repeat;
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

#myCanvas .logo {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  width: 5.3rem;
  height: 2rem;
}

.result-img {
  position: absolute;
  left: 4rem;
  top: 6rem;
  width: 75%;
}

#myCanvas .result-img {
  position: absolute;
  left: 4rem;
  top: 4rem;
  width: 65%;
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

.result-text {
  position: absolute;
  padding: 0 3rem;
  color: #ECFBFF;
  bottom: 15%;
  z-index: 1000;
  animation: lefteaseinAnimate 1s ease 1;
  /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
  -webkit-animation: lefteaseinAnimate 1s ease 1;
  -ms-animation: lefteaseinAnimate 1s ease 1;
  -o-animation: lefteaseinAnimate 1s ease 1;
  -moz-animation: lefteaseinAnimate 1s ease 1;

  /*规定动画的最后状态为结束状态*/
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
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

</style>
