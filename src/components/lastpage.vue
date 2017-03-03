<template>
<div>
	<transition name="fadeIn">
		<div class="last-page " v-if="honer.lang">
			<div class="que-wrapper">
				<div class="que-bg-bottom">
					<div class="test-honor">
						<img  width="96" src="../assets/test-hornor_03.png" alt="">
						<img   class="honer" :class="computedObj" :src="linkAll.static+'/dist/'+ computedObj +'_03.png'" alt="">
					</div>
					<p class="test-desc" >{{honer[computedObj].suggest[choosenum2].sugge}}</p>
					<div class="test-image" >
						<img :src="linkAll.static+'/dist/'+ honer[computedObj].suggest[choosenum2].eName +'.jpg'" alt="">
					</div>
					<router-link class="test-button t-button1" to="/sharepage"></router-link>	
					<a href="http://hezuo.joyme.com/new/?c=friendstool&a=friendsList&wiki_key=wzry&type=1&pb_page=2" class="test-button t-button2"></a>
				</div>

				<div class="que-blank"></div>
				<v-logo></v-logo>
			</div>
		</div>
	</transition>	
	<router-view :role="role" :linkAll="linkAll"></router-view>
</div>
</template>

<script>
import bottomlogo from './bottomlogo.vue'
import axios from 'axios';

export default {
	props: {
		cunscore: Number,
		honer:Object,
		linkAll:Object,
		choosenum:Number
	},
	data() {
	  return {
	    cunHonerObj:{},
	    single:false,
	    role:[],
	    choosenum2:false,
	    scoreIn:0
	  }
	},
	created(){
		/*this.role = this.honer[this.beCalled].suggest[this.choosenum2].name;
		console.log(this.role);*/

		// console.log(this.honer)

	},
	methods: {
		countTimes() {
			console.log('记录请求');
			axios.post( this.linkAll.hezuo + 'new/?c=girlday&a=sharenum').then((res) => {
				console.log('记录返回');

			})
		}
	},
	computed:{
		computedObj() {
      this.choosenum2 = localStorage.getItem('choosenum');
			
      this.scoreIn = localStorage.getItem('cunscore');
      console.log(localStorage.getItem('cunscore'));
			if(this.scoreIn > 90){
				this.role.push(this.honer['kongxu'].suggest[this.choosenum2].name);
				return "kongxu";
			}else if(this.scoreIn <= 90 && this.scoreIn > 60){
				this.single = true;
				this.role.push(this.honer['lang'].suggest[this.choosenum2].name);

				return "lang";
			}else if(this.scoreIn <= 60 && this.scoreIn > 30){
				this.role.push(this.honer['qiuwen'].suggest[this.choosenum2].name);
				console.log(this.role)
				return "qiuwen";
			}else if(this.scoreIn <= 30 && this.scoreIn > 0){
				this.role.push(this.honer['quelian'].suggest[this.choosenum2].name);

				return "quelian";
			}else if(this.scoreIn == 0){
				this.role.push(this.honer['song'].suggest[this.choosenum2].name);

				this.single = true;
				return "song";
			}
		}
		
	},
	components: {
		'v-logo': bottomlogo
	}
}
</script>

<style lang="scss">
	.last-page{
		position: fixed;
		overflow-y: scroll;
		z-index: 2;
		width: 100%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		background: url(../assets/page3.jpg) 0 0 no-repeat;
		background-size: 100%;
		&.fadeIn-enter-active, &.fadeIn-leave-active{
			transition: all 0.5s ease 
		}
    &.fadeIn-enter, &.fadeIn-leave-active{
      opacity: 0;
    }
    .que-wrapper{
    	position: relative;
    	margin: 50px auto 0;
    	width: 78.3%;
    	.que-bg-bottom{
    		background:url(../assets/page_bg3_03.png) left bottom /100% 100% no-repeat;
  			width: 100%;
  			height:513px; 
  			padding-top: 1px;
	    	.test-honor{
	    		margin-top: 26.7px;
	    		text-align: center;
					.honer{
						width: 42px;
						&.single,&.lang,&.song{
							width: 21px;
						}
					}
	    	}
	    	.test-desc{
	    		padding:15px 18px 0;
	    		font-size: 1rem;
	    		line-height: 21px;
	    		height: 155px; 
	    		box-sizing: border-box; 
	    		color:#fff;
	    	}
	    	.test-image{
					width: 174px;
					margin: -10px auto 0;

	    		img{
	    			width: 100%;
	    		}
	    	}
	    	.test-button{
	    		display: block;
	    		width: 218px;
	    		height: 42px;
	    		margin: 10px auto 0;
	    		&.t-button1{
	    			margin-top: 18px;
	    			background: url(../assets/button1_07.png) left bottom /100% no-repeat;

	    		}
	    		&.t-button2{
	    			background: url(../assets/button2.png) left bottom /100% no-repeat;

	    		}
	    	}
    	}
    	
    }
	}
	@media (max-width:414px) {
  	.que-blank{
  		height: 80px;
  	}
	}
	@media (max-width:375px) {
  	.que-blank{
  		height: 81px;
  	}
	}
	@media (max-width:320px) {
		.last-page{
			.que-wrapper{
				margin-top: 20px;
				.que-bg-bottom{
					height: 492px;
				}
			}
		}
  	.que-blank{
  		height: 81px;
  	}
	}
</style>