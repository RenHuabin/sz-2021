import Vue from 'vue'
import VueRouter from "vue-router"
import movie from './movie'
import mine from './mine'
import cinema from './cinema'

Vue.use(VueRouter)

const routes = [
  
 
]

const router = new VueRouter({
  mode: 'hash',
 
  routes:[
    {
      path:'/',
      redirect:'/movie'
    },
    movie,
    mine,
    cinema
  ]
})

export default router
