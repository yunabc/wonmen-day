<template>
<div>
		<div class="questions-page">
			<transition name="fadein">
				<div class="que-wrapper" v-show="ifFade">
					<div class="que-bg-bottom">
						<div class="que-num-top"><span class="num-imgae" :class="'num-imgae'+index"></span></div>
						<div class="que-que" v-if="ti.data">
							<p class="que-title">{{ti.data[curIndex].question}}</p>
						</div>
						<ul class="chose-options" v-if="ti.data">
							<li class="option" v-for="option in ti.data[curIndex].options" @click="choseThis(option.val)" data-score="option.val">{{option.title}}</li>
							
						</ul>
						<router-link ref="tolastpage" to="/lastpage" ></router-link>	
					</div>
					
				</div>
			</transition>	
		</div>
	<div>
		<router-view  :cunscore="cunscore" :honer="honer" :linkAll="linkAll" :choosenum="choosenum"></router-view>
	</div>	
	<!-- <v-last v-show="showLastpage" :cunscore="cunscore" :honer="honer"></v-last> -->
</div>
</template>

<script>
  // const timer = null;
  import lastpage from './lastpage.vue';
  import axios from 'axios';
	export default {
		props: {
			ti: Object,
			score: Number,
			linkAll:Object,
			choosenum:Number,
			fadeIn:Boolean
		},
		data() {
		  return {
		  	fadeIn2:false,
		  	honer:{
					"kongxu":{
						"answer":"kongxu",
						"suggest":[{
							"name":"孙膑",
							"eName":"sunbin",
							"sugge":"打遍天梯求教育，场场最佳太空虚？杀人下塔已经无法带来快感，是否感受到一丝高手的寂寞...建议选用可爱的男孩子孙膑：怒帮队友刷人头，功成身退美名传！"
						},{
							"name":"蔡文姬",
							"eName":"caiwenji",
							"sugge":"打遍天梯求教育，场场最佳太空虚，杀人下塔已经无法带来快感，是否感受到一丝高手的寂寞...建议选用毒奶萝莉蔡文姬：风骚走位救队友，0杀0死真 • 刺激"
						}]
					},
					"lang":{
						"answer":"kongxu",
						"suggest":[{
							"name":"后裔",
							"eName":"houyi",
							"sugge":"铭文满了吗？等级满了嘛？英雄满了吗？天梯王者了吗？不要总想着1V5搞大新闻！建议选用挠两下就跑的后裔：没有位移血还脆，纯靠意识和走位！"
						},{
							"name":"孙尚香",
							"eName":"sunshangxiang",
							"sugge":"铭文满了吗？等级满了嘛？英雄满了吗？天梯王者了吗？放平心态，不要总想着1V5搞大新闻！ 建议选用”有去无回”孙尚香：一滚三炮抢人头，你死我亡二选一"
						}]
					},
					"qiuwen":{
						"answer":"kongxu",
						"suggest":[{
							"name":"孙悟空",
							"eName":"sunwukong",
							"sugge":"玩游戏最忌讳想太多，队友被围、高地被推，都想救只能顾此失彼，专心做好眼前事。建议选用“一棍入魂”孙悟空： 月黑风高闷头抡人，出门只带暴击铭文！"
						},{
							"name":"安琪拉",
							"eName":"anqila",
							"sugge":"玩游戏最忌讳想太多，队友被围、高地被推，都想救只能顾此失彼，专心做好眼前事。建议选用“玩火少女”安琪拉：烧人放火别回头，一路向西炸水晶！"
						}]
					},
					"quelian":{
						"answer":"kongxu",
						"suggest":[{
							"name":"李白",
							"eName":"libai",
							"sugge":"输几把就不想玩了？从黄金掉到青铜就卸载了？玩游戏最忌讳丧失信心、记住，猛练自然强！建议选用“速效救心“李白：三段位移秒全场，逆天伤害怎么输？"
						},{
							"name":"貂蝉",
							"eName":"diaochan",
							"sugge":"输几把就不想玩了？从黄金掉到青铜就卸载了？玩游戏最忌讳丧失信心、记住，猛练自然强！建议选用“人头收割机“ 貂蝉：一波四杀不是梦，团灭劝降树信心！"
						}]
					},
					"song":{
						"answer":"kongxu",
						"suggest":[{
							"name":"关羽",
							"eName":"guanyu",
							"sugge":"作为萌新，看到对面恶狠狠地冲过来，害怕是难免的，但一直用亚瑟怂在队友身后也不是办法。建议选用“四驱肉盾”关羽：快如刺客追不上，肉似坦克打不死！"
						},{
							"name":"花木兰",
							"eName":"huamulan",
							"sugge":"作为萌新，看到对面恶狠狠地冲过来，害怕是难免的，但一直用亚瑟怂在队友身后也不是办法。建议选用“精神图腾”花木兰，并默念我是男人我是男人一百遍！"
						}]
					}
				},
		  	cunscore:0,
		    index: 0,
		    cunObj:{},
		    showLastpage:false,
		   
		  }
		},
		created(){
			
		},
		computed: {
    	curIndex() {

				return this.index
			},
			ifFade(){
				if(!this.fadeIn){
					
					return !this.fadeIn;
				}
			}
  	},
  	methods:{
			choseThis(score){
				this.cunscore += score*1;
				// console.log(this.cunscore,this.ti.data.length)
				if(this.index==this.ti.data.length-1){
					this.$router.push({path:"lastpage"})
					localStorage.setItem('cunscore',this.cunscore);
					this.showLastpage = true;
					return;
				}
				this.index++;

			}
  	},
  	components: {
  		'v-last':lastpage
  	}
	}
</script>

<style lang="scss">
	.questions-page{
		position: fixed;
		overflow-y: scroll;
		z-index: 2;
		width: 100%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		background: url(../assets/page2_bg.jpg) 0 0 no-repeat;
		background-size: 100%;
    .que-wrapper{
    	position: relative;
    	margin: 50px auto 0;
    	width: 78.3%;
    	opacity: 1;
		  transition: opacity 0.5s;
	  	&.fadein-enter-active,&.fadein-leave-active{
	  		
	  	}
		  &.fadein-enter,&.fadein-leave-active{
		    opacity:0;
		  }
    	.que-bg-bottom{
    		background:
    			url(../assets/tbg.png) left bottom /100% 100% no-repeat;
    			width: 100%;
    			height:545px; 
    			padding-top: 1px;
	    	.que-num-top{
	    		width: 69px;
	    		height: 63.5px;
	    		position: absolute;
	    		top: -23px;
	    		left: 50%;
	    		margin-left: -34.5px;
	    		background:url(../assets/num_sign_03.png) left top /100% no-repeat;
	    		text-align: center;
	    		z-index: 1;
					.num-imgae{
						background:url(../assets/num_1_06.png) center 41% /100% no-repeat;
						width: 17px;
						height: 100%;
						display: inline-block;
						&.num-imgae0{
							background-image:url(../assets/num_1_06.png);
						}
						&.num-imgae1{
							background-image:url(../assets/num_2.png);
						}
						&.num-imgae2{
							background-image:url(../assets/num_1_08.png);
						}
						&.num-imgae3{
							background-image:url(../assets/num_1_09.png);
						}
						&.num-imgae4{
							background-image:url(../assets/num_1_10.png);
						}

					}
	    	}
	    	.que-que{
	    		width:98%;
	    		position: relative;
	    		margin: 19px auto 0;
	    		padding-top: 245px;
	    		background:url(../assets/position-top_03.png) left top /100% 100% no-repeat;
	    		.que-title{
						width: 80%;
						position: absolute;
						top: 31%;
						left: 50%;
						margin-left: -40%;
						font-size: 20px;
						line-height: 26px;
						color: #35a7c1;
						font-weight: 400;
	    		}
	    	}
	    	.chose-options{
	    		padding-left: 3px;
	    		.option{
	    			height: 67.7px;
	    			margin-bottom: 2px;
	    			padding: 20px 10% 0;
	    			font-size: 14px;
	    			line-height: 20px;
	    			color: #fff;
	    			box-sizing:border-box;
	    			background:url(../assets/position_li_03.png) left top /auto 100% no-repeat;

	    		}
	    	}
    	}
    	
    }
	}
</style>