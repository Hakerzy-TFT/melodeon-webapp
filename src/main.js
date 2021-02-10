import Vue from 'vue'
import Home from './components/Home.vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/' },
    { path: '/App', component: App },
    { path: '/Home', component: Home }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')