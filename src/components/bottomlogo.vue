

<template>
<div>
	<div class="logo-wrapper">
	  <a class="logo" href="https://www.joyme.com"></a>
	  <span class="compony"></span>
	</div>	
</div>
</template>

<script>
	export default {
		data() {
		  return {
		    
		  }
		}
	}
</script>

<style lang="scss">
	.logo-wrapper{
	  width: 100%;
	  height: 24px;
	  position: absolute;
	  left: 0;
	  bottom: 28.8px;
	  text-align: center;
	  font-size: 0;
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
</style>