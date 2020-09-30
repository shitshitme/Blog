import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Write = () => import('views/write/Write')
const About = () => import('views/about/About')
const MainShowCard = () => import('views/home/childComps/mainshowcard/MainShowCard')
const MainTimeLine = () => import('views/home/childComps/maintimeline/MainTimeLine')

Vue.use(VueRouter);

const routes = [
	// 默认渲染
	{
		path: '',
		redirect: '/Home'
	},
	// Home的路由映射
	{
		path: '/Home',
		name: 'home',
		component: Home,
		meta: {
			title: '看博客'
		},
		children: [
			{
				path: 'mainshowcard',
				name: 'mainshowcard',
				component: MainShowCard,
			},
			{
				path: 'maintimeline',
				name: 'maintimeline',
				component: MainTimeLine,
			}
		]
	},
	// Write的路由映射
	{
		path: '/write',
		name: 'write',
		component: Write,
		meta: {
			title: '写博客'
		}
	},
	// About的路由映射
	{
		path: '/about',
		name: 'abouyt',
		component: About,
		meta: {
			title: '关于我'
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	//从from跳转到to
	document.title = to.meta.title;
	next();
})

// router.afterEach((to, from, next) => {
// 	console.log('afterEach');
// })

export default router