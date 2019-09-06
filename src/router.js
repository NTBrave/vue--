import Vue from 'vue'
import Router from 'vue-router'

// import Collection from './views/Collection.vue'
import Shop from './views/Shop.vue'
import User from './views/User.vue'
import Newhome from './views/Newhome.vue'
import Chat from './views/Chat.vue'
import Search from './components/Search.vue'
import ImgPage from './views/ImgPage.vue'
import VideoPage from './views/VideoPage.vue'
import Chatting from './components/Chatting.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Newhome',
    component: Newhome
  },
  {
    path: '/User',
    name: 'user',
    component: User
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/ImgPage',
    name: 'ImgPage',
    component: ImgPage
  },
  {
    path: '/VideoPage',
    name: 'VideoPage',
    component: VideoPage
  },
  {
    path: '/Chatting',
    name: 'Chatting',
    component: Chatting
  }
  ],
  // 解决路由调转 滚动条不在顶端问题
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})