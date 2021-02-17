import Vue from 'vue'
import Home from './components/Home.vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Descript from './components/Descript.vue'
import store from "./store";
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Descript },
    { path: '/Home', component: Home },
]

const router = new VueRouter({
    routes
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')