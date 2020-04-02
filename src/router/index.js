import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import step2 from '../views/step2.vue'
import step3 from '../views/step3.vue'
import step4 from '../views/step4.vue'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/CBKTRN0100000000V.html',
    name: Main,
    component: Main
    // meta: {
    //   progress: {
    //     func: [
    //       { call: 'color', modifier: 'temp', argument: '#ffb000' },
    //       { call: 'fail', modifier: 'temp', argument: '#6e0000' },
    //       { call: 'location', modifier: 'temp', argument: 'top' },
    //       { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 } }
    //     ]
    //   }
    // }
  },
  {
    path: '/step2',
    name: 'step2',
    component: step2
    // component: () => import(/* webpackChunkName: "step2" */ '../views/step2.vue')
  },
  {
    path: '/step3',
    name: 'step3',
    component: step3
    // component: () => import(/* webpackChunkName: "step3" */ '../views/step3.vue')
  },
  {
    path: '/step4',
    name: 'step4',
    component: step4
    // component: () => import(/* webpackChunkName: "step3" */ '../views/step3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const options = {
  color: '#ffb000',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '1.5s',
    opacity: '0.6s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

export default router
