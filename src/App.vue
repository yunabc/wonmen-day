<template>
<div>
  
  <div class="page-one" >
    <div class="start-btn"  @click="testBro" ></div>  
    <v-logo></v-logo>
  </div>
  <router-view :ti="ti" :score="score" :linkAll="linkAll" :choosenum="choosenum" :fadeIn="fadeIn"></router-view>
</div>
</template>

<script>
import bottomlogo from './components/bottomlogo.vue'
// import axios from 'axios'
export default {
  data() {
    return {
      ti: {},
      score: 0,
      choosenum:0,
      fadeIn:false,
      linkAll:{
        static:"http://static.joyme.alpha/mobile/women-day/",
        hezuo:"http://hezuo.joyme.alpha/"
      }
    }
  },
  created() {
    // axios.get(this.linkAll + './src/data/ti.json').then((res) =>{
    //   this.ti = res;      
    // })
    this.ti={"data":[
        {
          "question":"哪种症状在你身上体现的最明显",
          "options": [
            {"title":"A、就玩一两个英雄，不想尝试别的","val":"0"},
            {"title":"B、只用女性英雄，我是表里如一的小姐姐","val":"10"},
            {"title":"C、颜值大于一切，绝不与丑英雄产生交集","val":"20"},
            {"title":"D、都没有，我是女司机中的战斗机","val":"30"}

          ]
        
        },
        {
          "question":"狭路相逢开团战，哪种场面你最熟悉",
          "options": [{
            "title":"A、每次我赶到的时候，队友都已经死光了","val":"0"},
            {"title":"B、队友全残血啦，可能打不赢吧，我还是先逃吧","val":"10"},
            {"title":"C、请求集合！请求集合！请求集合！尼玛，灭！","val":"20"},
            {"title":"D、虽然不太懂技能，不过三杀还是蛮开心的~","val":"30"
          }]
        },
        {
          "question":"意外获得1000点券，你会怎么花",
          "options": [{
            "title":"A、存着等商城打折时候再说","val":"30"},
            {"title":"B、实惠第一，买月卡礼盒","val":"20"},
            {"title":"C、买新出的热门英雄","val":"10"},
            {"title":"D、爽最重要，买自己喜欢的皮肤","val":"0"
          }]
        },
        {
          "question":"请在一秒内凭直觉回答，红色铭文代表什么",
          "options": [{
            "title":"A、生命","val":"10"},
            {"title":"B、攻击","val":"30"},
            {"title":"C、稀有","val":"10"},
            {"title":"D、铭文是什么","val":"0"
          }]
        },
        {
          "question":"讲真，你是怎么开始玩王者荣耀的？",
          "options": [{
            "title":"A、被男友/前男友带入坑的","val":"0"},
            {"title":"B、和闺蜜组队开黑","val":"0"},
            {"title":"C、本身就喜欢玩游戏","val":"0"},
            {"title":"D、稀里糊涂就开始玩了","val":"0"
          }]
        }
      ]};
    const location_url = location.href; 
    if(location_url.indexOf("lastpage") <0){
      if(localStorage.getItem('choosenum') > 0){
        localStorage.setItem("choosenum",'0');
        this.choosenum = 0;
      }else {
        localStorage.setItem("choosenum",'1');
        this.choosenum = 1;
      }
    }
    
  },
  methods: {
    testBro() {
      if(!this._isWeiXin()){
        this.$router.push({path:"questions"})
      }else{
        alert('请用微信浏览本游戏！')
      }
    },
    _isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }
  },
  
  components: {
    'v-logo': bottomlogo
  }
  

}
</script>

<style lang="scss">
  .page-one{
    width: 100%;
    height: 100%;
    position: fixed;
    background: url(./assets/bg.jpg) 0 0 no-repeat;
    background-size: 100%;
    .start-btn{
      position: absolute;
      width: 175px;
      height: 48px;
      background: url(./assets/button1_03.png) 0 0 no-repeat;
      background-size: contain; 
      left: 50%;
      bottom: 80px;
      margin-left: -87.5px;
      
    }
    
  }

</style>
