import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import $ from 'jquery'
import 'bootstrap'
import VideoPlayer from 'vue-video-player'
// mint-ui的调用
import Header from 'mint-ui/lib/header'
import {
  Swipe, SwipeItem, Actionsheet, Popup, IndexList, IndexSection, Cell,
  Lazyload, TabContainer, TabContainerItem, Button, Field, Search, Toast
} from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import 'mint-ui/lib/swipe/style.css'
import 'mint-ui/lib/actionsheet/style.css'
import 'mint-ui/lib/popup/style.css'
import 'mint-ui/lib/index-list/style.css'
import 'mint-ui/lib/index-section/style.css'
import 'mint-ui/lib/cell/style.css'
// import {} from 'mint-ui'
import 'mint-ui/lib/lazyload/style.css'
// import { TabContainer, TabContainerItem } from 'mint-ui'
import 'mint-ui/lib/tab-container/style.css'
import 'mint-ui/lib/tab-container-item/style.css'
import moment from 'moment'
// import { Button } from 'mint-ui'
import 'mint-ui/lib/button/style.css'
// import { Field } from 'mint-ui'
import 'mint-ui/lib/field/style.css'
// import {  } from 'mint-ui'
import 'mint-ui/lib/search/style.css'

// import {} from 'mint-ui'
import 'mint-ui/lib/toast/style.css'
Vue.component(Toast.name, Toast)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.component(Search.name, Search)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Popup.name, Popup)

Vue.use(VideoPlayer)
Vue.use(Lazyload)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
// 本地化，中文时间显示
moment.locale('zh-cn')
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.prototype.moment = moment
Vue.prototype.random = n => Math.floor(n * Math.random())
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Vue.prototype.playAudio = () => {
//   let buttonAudio = document.getElementById('eventAudio')
//   buttonAudio.setAttribute('src',audio)
//   buttonAudio.play()
// }
