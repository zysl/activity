import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Question from '@/components/question'
import Result from '@/components/result'
import InvistQ from '@/components/invistQ'
import InvistR from '@/components/invistR'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
     	path: '/',
      	name: 'main',
      	component: Main
    },
    {
    	path: '/question',
      	name: 'question',
      	component: Question
    },
    {
    	path: '/result',
      	name: 'result',
      	component: Result
    },
    {
      path: '/invistQ',
        name: 'invistQ',
        component: InvistQ
    },
    {
      path: '/invistR',
        name: 'invistR',
        component: InvistR
    }
  ]
})
