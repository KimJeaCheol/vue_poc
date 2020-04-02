import Vue from 'vue'
import CBKTRN0100000000V from './CBKTRN0100000000V'
import router from './src/router'
import store from './src/store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(CBKTRN0100000000V)
}).$mount('#CBKTRN0100000000V')
