import Vue from 'vue'
import App from './App.vue'
import questions from './components/questions.vue'
import lastpage from './components/lastpage.vue'
import sharepage from './components/sharepage.vue'
import VueRouter from 'vue-router'
import fastclick from 'fastclick'
// import questions from 'components/questions/questions'
import './css/reset.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/questions',
    component: questions,
    children:[  
        {
        	 path: '/lastpage',
        	 component: lastpage,
        	 children:[  
			        {
			        	 path: '/sharepage',
			        	 component: sharepage
			        }
			    ] 
        }
    ]  
  }],
  linkActiveClass: 'active'
});
// alert(1);
// console.log(window);
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
var startOri = 'shu';  
var mark= document.getElementById('mark');   
window.addEventListener(evt, function() {
	if(startOri == 'shu'){
		mark.style.display = 'block';
    startOri = "heng";
	}else if(startOri == 'heng'){
		mark.style.display = 'none';
		startOri = "shu";
	}
	console.log(startOri);
}, false);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// router.push('questions')