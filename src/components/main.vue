<template>
  <div class="bg-content" v-if="iswx">
    <div class="bg-img bg-img1"></div>
    <div class="bg-img bg-img2"></div>
    <div class="bg-img bg-img3"></div>
    <div class="bg-img bg-img4"></div>
    <div class="bg-img bg-img5"></div>

    <div class="bg-tips">
      <img class="icon_cs" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/index/icon_cs.png" alt="测试">
      <span class="tips-span">{{numPeople}} 人测过</span>
    </div>
    <div class="operate-area">
        <router-link to="/question">
            <img class="operate-btn" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/index/icon_lcs_btn.png" alt="理财师">
        </router-link> 

        <router-link to="/invistQ">
            <img class="operate-btn" src="https://static.ssya.cn/image/blz/icon/static/img/3_0/index/icon_tzr_btn.png" alt="投资人">
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            msg: '',
            numPeople:0,
            iswx:true
        }
    },

    created() {
        this.getIndex()
    },

    methods:{
        getIndex() {
            this.$axios.post('/ssya/api/activity/tongji',{
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                type:1
            }).then(res => {
                this.numPeople = res.data.data;
                if(this.numPeople >= 10000){
                  this.numPeople = Math.round(this.numPeople/1000)/10+'w';
                }else if(this.numPeople >= 1000){
                  this.numPeople = Math.round(this.numPeople/100)/10+'k';
                }

                localStorage.setItem('score','');
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.bg-content .bg-img {
    display: block;
    height: 21%;
}

.bg-content .bg-img1 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/index/bg1.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 0;
}

.bg-content .bg-img2 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/index/bg2.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.1rem;
}

.bg-content .bg-img3 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/index/bg3.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.3rem;
}

.bg-content .bg-img4 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/index/bg4.png) center no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -0.4rem;
}

.bg-content .bg-img5 {
    background: url(https://static.ssya.cn/image/blz/icon/static/img/3_0/index/bg5.png) center no-repeat;
    background-size: 101% 100%;
    position: relative;
    top: -0.5rem;
}
</style>
