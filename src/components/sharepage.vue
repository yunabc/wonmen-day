<template>
	<div>
		<transition name="fadeIn">
			<div class="share-page">
				<div class="share-desc">专业拯救萌女玩家！<br>邀请你的姐妹们试试吧！</div>
				<div class="logo-wrapper">
				  <a class="logo" href="https://www.joyme.com"></a>
				  <span class="compony"></span>
				</div>
			</div>
		</transition>	
	</div>
</template>

<script>
  // const timer = null;
  import wx from 'weixin-js-sdk';
  import axios from 'axios';
	export default {
		
		props: {
			role: Array,
			linkAll:Object
		},
		
		created(){
			
			const title = '我原来是王者荣耀中的'+this.role[0]+'，快来测测你是哪位英雄吧';
			const link = this.linkAll.hezuo + "new/?c=girlday&a=index";
			const imgUrl = this.linkAll.static + 'dist/share-icon_26.jpg';
			const succLink = this.linkAll.hezuo + "new/?c=girlday&a=sharednum";
			axios.post(this.linkAll.hezuo + 'new/?c=girlday&a=getconfig').then((res) =>{
				const resObj = res.msg;
				wx.config({
		        debug: false,
		        appId: resObj.appId, // 必填，公众号的唯一标识
		        timestamp: resObj.timestamp, // 必填，生成签名的时间戳
		        nonceStr: resObj.nonceStr, // 必填，生成签名的随机串
		        signature: resObj.signature,// 必填，签名，见附录1
		        jsApiList: [
		            'onMenuShareTimeline',
		            'onMenuShareAppMessage',
		            'onMenuShareQQ',
		            'onMenuShareQZone'
		        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		    });
			})

			        wx.ready(function () {
			            //分享到朋友圈
			            wx.onMenuShareTimeline({
			                title: title,
			                link: link,
			                imgUrl: imgUrl,
			                success: function (res) {
			                    axios.post(succLink).then((res) => {

			                    })
			                }
			            });

			            wx.onMenuShareAppMessage({
			                title: title,
			                link: link,
			                imgUrl: imgUrl,
			                success: function (res) {
			                    axios.post(succLink).then((res) => {
			                    	
			                    })
			                }
			            });

			            //分享到QQ
			            wx.onMenuShareQQ({
			                title: title,
			                link: link,
			                imgUrl: imgUrl,
			                success: function (res) {
			                    axios.post(succLink).then((res) => {
			                    	
			                    })
			                }
			            });

			            //分享到QQ空间
			            wx.onMenuShareQZone({
			                title: title,
			                link: link,
			                imgUrl: imgUrl,
			                success: function (res) {
			                    axios.post(succLink).then((res) => {
			                    	
			                    })
			                }
			            });
			        });		
		}
	}
</script>

<style lang="scss">
	.share-page{
		position: fixed;
		overflow: auto;
		z-index: 2;
		width: 100%;
		height: 100%;
		transition: all .5s;
		background: url(../assets/share_bg.jpg) 0 0 no-repeat;
		background-size: 100%;
		&.fadeIn-enter-active, &.fadeIn-leave-active{

		}
    &.fadeIn-enter, &.fadeIn-leave-active{
      opacity: 0
    }
    .share-desc{
    	margin: 38.5% auto 0;
    	width: 67%;
    	color: #fff;
    	line-height: 50px;
    	font-size: 18px;
    	text-align: center;

    }
    .logo-wrapper{
      width: 100%;
      height: 24px;
      position: absolute;
      left: 0;
      text-align: center;
      font-size: 0;
      top: 47.7%;
	    text-align: right;
	    padding-right: 20%;
	    box-sizing: border-box;
      .logo{
        background: url(../assets/logo_03.png) 0 0 no-repeat;
        display: inline-block;
        width: 60.4px;
        height: 100%;
        background-size: cover;

      }
      .compony{
        background: url(../assets/logo_06.png) 0 center no-repeat;
        display: inline-block;
        width: 32px;
        height: 100%;
        margin-left: 8px;
        background-size: 100%;

      }
    }
    	
   
	}
</style>