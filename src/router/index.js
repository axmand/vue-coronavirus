import Vue from 'vue'
import Router from 'vue-router'
import coronavirusMap from '@/components/coronavirusMap.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coronavirusMap',
      component: coronavirusMap
    }
  ]
})
