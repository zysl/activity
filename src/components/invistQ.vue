<template>
  <div class="bg-content">
    <div class="bg-img bg-img1">
        <div class="icon-label">
            <span>{{num}}/4</span>
        </div>

        <div v-if="num == 1">
            <img class="q-title" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/one.png" alt="one">
            <div class="question-list">
                <img class="question-w" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_w.png" alt="">
                <span class="question-intro">岁末大扫除，你会先丢掉下列哪一样物品？</span>
            </div>
        </div>

        <div v-if="num == 2">
            <img class="q-title" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/two.png" alt="two">
            <div class="question-list">
                <img class="question-w" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_w.png" alt="">
                <span class="question-intro">                                                       
                    假设有一天，你走在大街上，快到尽头时，突然看到一座高耸的围墙。你靠近时发现围墙上有一个孔洞。你按捺不住好奇心，凑上前看，你觉得通过孔洞将看到的场景是
                </span>
            </div>
        </div>

        <div v-if="num == 3">
            <img class="q-title" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/three.png" alt="three">
            <div class="question-list">
                <img class="question-w" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_w.png" alt="">
                <span class="question-intro">
                    出国旅行，去古董市场淘宝是一项很重要的行程，你对下列哪一项商品最感兴趣？
                </span>
            </div>
        </div>

        <div v-if="num == 4">
            <img class="q-title" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/four.png" alt="four">
            <div class="question-list">
                <img class="question-w" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_w.png" alt="">
                <span class="question-intro">
                    假如能在自家后院栽上一棵树，作为你的幸运树的话，你打算栽什么？
                </span>
            </div>
        </div>
    </div>
    <div class="bg-img bg-img2"></div>
    <div class="bg-img bg-img3">
        <ul class="answer-list" v-if="num == 1">
            <li :class="{'answer-li':true,'answer-li-selected':check1[0].check}" @click="selected(1,0)">
                <span :class="{'icon_check':true,'icon_checked':check1[0].check}"></span>
                <span class="answer-span">A.  旧衣服</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check1[1].check}" @click="selected(1,1)">
                <span :class="{'icon_check':true,'icon_checked':check1[1].check}"></span>
                <span class="answer-span">B.  老IPHONE</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check1[2].check}" @click="selected(1,2)">
                <span :class="{'icon_check':true,'icon_checked':check1[2].check}"></span>
                <span class="answer-span">C.  零零碎碎的小东西</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check1[3].check}" @click="selected(1,3)">
                <span :class="{'icon_check':true,'icon_checked':check1[3].check}"></span>
                <span class="answer-span">D.  过期的旧书杂志</span>
            </li>
        </ul>
        <ul class="answer-list" v-if="num == 2">
            <li :class="{'answer-li':true,'answer-li-selected':check2[0].check}" @click="selected(2,0)">
                <span :class="{'icon_check':true,'icon_checked':check2[0].check}"></span>
                <span class="answer-span">A.  一对男女正在谈情说爱</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check2[1].check}" @click="selected(2,1)">
                <span :class="{'icon_check':true,'icon_checked':check2[1].check}"></span>
                <span class="answer-span">B.  看到一栋富丽堂皇的大宅邸</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check2[2].check}" @click="selected(2,2)">
                <span :class="{'icon_check':true,'icon_checked':check2[2].check}"></span>
                <span class="answer-span">C.  没有边际郁郁葱葱的大花园草坪</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check2[3].check}" @click="selected(2,3)">
                <span :class="{'icon_check':true,'icon_checked':check2[3].check}"></span>
                <span class="answer-span">D.  正对着你虎视眈眈的警卫员</span>
            </li>
        </ul>          

        <ul class="answer-list" v-if="num == 3">
            <li :class="{'answer-li':true,'answer-li-selected':check3[0].check}" @click="selected(3,0)">
                <span :class="{'icon_check':true,'icon_checked':check3[0].check}"></span>
                <span class="answer-span">A.  古董相机</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check3[1].check}" @click="selected(3,1)">
                <span :class="{'icon_check':true,'icon_checked':check3[1].check}"></span>
                <span class="answer-span">B.  手工织毯</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check3[2].check}" @click="selected(3,2)">
                <span :class="{'icon_check':true,'icon_checked':check3[2].check}"></span>
                <span class="answer-span">C.  古银首饰</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check3[3].check}" @click="selected(3,3)">
                <span :class="{'icon_check':true,'icon_checked':check3[3].check}"></span>
                <span class="answer-span">D.  书画艺品</span>
            </li>
        </ul>       

        <ul class="answer-list" v-if="num == 4">
            <li :class="{'answer-li':true,'answer-li-selected':check4[0].check}" @click="selected(4,0)">
                <span :class="{'icon_check':true,'icon_checked':check4[0].check}"></span>
                <span class="answer-span">A.  梧桐树</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check4[1].check}" @click="selected(4,1)">
                <span :class="{'icon_check':true,'icon_checked':check4[1].check}"></span>
                <span class="answer-span">B.  松树</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check4[2].check}" @click="selected(4,2)">
                <span :class="{'icon_check':true,'icon_checked':check4[2].check}"></span>
                <span class="answer-span">C.  芭蕉树</span>
            </li>
            <li :class="{'answer-li':true,'answer-li-selected':check4[3].check}" @click="selected(4,3)">
                <span :class="{'icon_check':true,'icon_checked':check4[3].check}"></span>
                <span class="answer-span">D.  果树</span>
            </li>
        </ul>
    </div>
    <div class="bg-img bg-img4">
        <img v-if="num != 1" @click="prevQ" class="next-btn" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_prev_btn.png" alt="">
        <img v-if="num == 4" @click="lookResult" class="next-btn-result" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/look_result.png" alt="">
        <img v-if="num != 4" @click="nextQ" class="next-btn" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_next_btn.png" alt="">
    </div>
                        
    <!-- banner -->
    <img v-if="num == 1" class="banner" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/banner6.png" alt="banner">
    <img v-if="num == 2" class="banner" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/banner7.png" alt="banner" style="top: 27%;">
    <img v-if="num == 3" class="banner" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/banner8.png" alt="banner">
    <img v-if="num == 4" class="banner" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/question/banner9.png" alt="banner">

    <diolog-tips v-if="isShow" :postTitle="postTitle"></diolog-tips> 
  </div>
</template>

<script>
import diologTips from '@/components/diologTip.vue';

export default {
    components:{
        diologTips
    },
    data () {
        return {
           num:1,
           isShow:false,
           postTitle:'',
           score:0,
           check1:[{
               'check':false,
               'score':0,
           },{
               'check':false,
               'score':1
           },{
               'check':false,
               'score':3
           },{
               'check':false,
               'score':2
           }],
           check2:[{
               'check':false,
               'score':1
           },{
               'check':false,
               'score':2
           },{
               'check':false,
               'score':3
           },{
               'check':false,
               'score':0
           }],
           check3:[{
               'check':false,
               'score':3
           },{
               'check':false,
               'score':0
           },{
               'check':false,
               'score':2
           },{
               'check':false,
               'score':1
           }],
           check4:[{
               'check':false,
               'score':3
           },{
               'check':false,
               'score':1
           },{
               'check':false,
               'score':0
           },{
               'check':false,
               'score':2
           }],
        }
    },

    methods:{
        nextQ() {
            let that = this;

            if(this.num < 4) {
                this.num++;
            }

        },

        prevQ() {
            if(this.num > 1) {
                this.num--;
            }
        },

        selected(_num,_index) {
            for(let i = 0; i < 4; i++) {

                if(_num == 1) {
                    this.check1[i].check = false;
                }else if(_num == 2) {
                    this.check2[i].check = false;
                }else if(_num == 3) {
                    this.check3[i].check = false;
                }else if(_num == 4) {
                    this.check4[i].check = false;
                }else {
                    this.check5[i].check = false;
                }
            }

            switch (_num) {
                case 1:
                    this.check1[_index].check = !this.check1[_index].check;
                    this.$set(this.check1,_index,this.check1[_index])
                    break;
                case 2:
                    this.check2[_index].check = !this.check2[_index].check;
                    this.$set(this.check2,_index,this.check2[_index])
                    break;
                case 3:
                    this.check3[_index].check = !this.check3[_index].check;
                    this.$set(this.check3,_index,this.check3[_index])
                    break;
                case 4:
                    this.check4[_index].check = !this.check4[_index].check;
                    this.$set(this.check4,_index,this.check4[_index])
                    break;
                default:
                    break;
            }
        },

        lookResult() {
            let that = this;
            let check1 = [];
            let check2 = [];
            let check3 = [];
            let check4 = [];
            let score = 0;


            for(let i = 0; i < 4; i++) {
                check1.push(this.check1[i].check)
                check2.push(this.check2[i].check)
                check3.push(this.check3[i].check)
                check4.push(this.check4[i].check)
            }

            if(check1.join(',').indexOf('true') < 0) {
                this.isShow = true;
                this.postTitle = '第一题要回答😄';
                setTimeout(function() {
                    that.isShow = false
                },1500)
                return ;
            }else if(check2.join(',').indexOf('true') < 0) {
                this.isShow = true;
                this.postTitle = '记得回答第二题😯';
                setTimeout(function() {
                    that.isShow = false
                },1500)
                return ;
            }else if(check3.join(',').indexOf('true') < 0) {
                this.isShow = true;
                this.postTitle = '你怎么忘记第三题呢？';
                setTimeout(function() {
                    that.isShow = false
                },1500)
                return ;
            }else if(check4.join(',').indexOf('true') < 0) {
                this.isShow = true;
                this.postTitle = '快结束咯，快点选';
                setTimeout(function() {
                    that.isShow = false
                },1500)
                return ;
            }else {
                for(let j = 0; j < 4; j++) {
                    
                    if(this.check1[j].check) {
                        score += this.check1[j].score
                    }

                    if(this.check2[j].check) {
                        score += this.check2[j].score
                    }

                    if(this.check3[j].check) {
                        score += this.check3[j].score
                    }

                    if(this.check4[j].check) {
                        score += this.check4[j].score
                    }
                }

                localStorage.setItem('score',score);
                this.$router.push('/invistR?score=' + score)
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
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/bg1.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 0;
}

.bg-content .bg-img2 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/bg2.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.1rem;
}

.bg-content .bg-img3 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/bg3.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.3rem;
}

.bg-content .bg-img4 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/bg4.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.icon-label {
    width: 5.4rem;
    height: 2.5rem;
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_label.png) center no-repeat;
    background-size: cover;
    position: absolute;
    right: 1.3rem;
    top: 2rem;
    text-align: center;
    line-height: 2.5rem;
}

.icon-label span {
    color: #644723;
    font-size: 1.4rem;
    position: relative;
    left: .5rem;
}

.q-title{
    position: absolute;
    width: 10.5rem;
    height: 4.4rem;
    top: 20%;
    margin-left: -5.25rem;
    left: 50%;
}

.question-w {
    width: 4.8rem;
    height: 5.3rem;
    display: inline;
}

.question-intro {
    display: inline;
    font-size: 1.4rem;
    color: #0A0816;
    word-break:break-all
}

.question-list {
    display: block;
    position: absolute;
    top: 40%;
    width: 86%;
    left: 7%;
    font-size: 17px;
    color: #0A0816;
    text-align: left;
    z-index:1000;
}

.banner {
    position: absolute;
    top:25%;
    width: 84%;
    left: 8%;
}

.answer-list {
    position: absolute;
    top: 40%;
    width: 86%;
    margin-left: 7%;
    z-index: 1000
}

.answer-li {
    margin-top: .9rem;
    width: 100%;
    height: 3rem;
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_wt.png) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.answer-li.answer-li-selected {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_hd.png) center no-repeat;
    background-size: cover;
}

.icon_check {
    display: inline-block;
    margin-left: .6rem;
    width: 1.3rem;
    height: 1.3rem;
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_check.png) center no-repeat;
    background-size: cover;
    border-radius: 50%;
    
}

.icon_check.icon_checked {
    background: url('https://static.ssya.cn/image/blz/icon/static/img/3_0/question/icon_checked.png') center no-repeat;
    background-size: cover;
}

.answer-span {
    display: inline-block;
    margin-left: 1.4rem;
    font-size: 1.4rem;
    color: #0A0816;
}

.next-btn {
    position: relative;
    top:55%;
    width: 12.6rem;
    height: 5rem;
    margin: 0 0.5rem;
}

.next-btn-result {
    position: relative;
    top:55%;
    width: 12.6rem;
    height: 5rem;
}

/*定义一个名字为lefteaseinAnimate动画，实现从页面的左边淡入页面效果*/
@keyframes lefteaseinAnimate{
    0%{ transform: translateX(-2000px); opacity: 0;}   /*在0%时设置文字在想X轴-2000px位移处（左边），透明度为0，也就是看不见文字*/
    100%{ transform: translateX(0px); opacity: 1;}         /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
}
@-webkit-keyframes lefteaseinAnimate{
    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
}
@-o-keyframes lefteaseinAnimate{
    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
}
@-ms-keyframes lefteaseinAnimate{
    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
}
@-moz-keyframes lefteaseinAnimate{
    0%{ -webkit-transform: translateX(-2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}    
}
.q-title,.answer-li {
    animation: lefteaseinAnimate 1s ease 1;    /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
    -webkit-animation: lefteaseinAnimate 1s ease 1;
    -ms-animation: lefteaseinAnimate 1s ease 1;
    -o-animation: lefteaseinAnimate 1s ease 1;
    -moz-animation: lefteaseinAnimate 1s ease 1;
    
    /*规定动画的最后状态为结束状态*/
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;  
      -o-animation-fill-mode: forwards; 
      -ms-animation-fill-mode: forwards;   
      -moz-animation-fill-mode: forwards; 
}

/*定义一个名字为righteaseinAnimate动画，实现从页面的右边淡入页面效果*/
@keyframes righteaseinAnimate{
    0%{ transform: translateX(2000px); opacity: 0;}   /*在0%时设置文字在想X轴2000px位移处（右边），透明度为0，也就是看不见文字*/
    100%{ transform: translateX(0px); opacity: 1;}      /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
}
@-webkit-keyframes righteaseinAnimate{
    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}
}
@-o-keyframes righteaseinAnimate{
    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}
}
@-ms-keyframes righteaseinAnimate{
    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}
}
@-moz-keyframes righteaseinAnimate{
    0%{ -webkit-transform: translateX(2000px); opacity: 0;}
    100%{ -webkit-transform: translateX(0px); opacity: 1;}
}

.question-list {
    animation: righteaseinAnimate 1s ease 1;  
    -webkit-animation: righteaseinAnimate 1s ease 1;
    -moz-animation: righteaseinAnimate 1s ease 1;
    -ms-animation: righteaseinAnimate 1s ease 1;
    -o-animation: righteaseinAnimate 1s ease 1;
    
    /*规定动画的最后状态为结束状态*/
    animation-fill-mode:forwards;
    -webkit-animation-fill-mode: forwards;  
      -o-animation-fill-mode: forwards; 
      -ms-animation-fill-mode: forwards;   
      -moz-animation-fill-mode: forwards; 
}

@-webkit-keyframes fadeInOut {
    0% {
        opacity:0;
    }
    25% {
        opacity:0.4;
    }
    50% {
        opacity: 0.7;    
    }
    75% {
        opacity:1;
    }
}

.banner {
    -webkit-animation-name: fadeInOut;
    -webkit-animation-timing-function: ease-in-out;
    /*-webkit-animation-iteration-count: infinite;*/
    -webkit-animation-duration: 5s;
    /*-webkit-animation-direction: alternate;*/
}

</style>
