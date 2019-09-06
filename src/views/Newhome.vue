<template>
  <div class="newhome">
    <section class="me" :class="[ !transition ? 'search-transition' : 'search-transition2']">
      <div class="me">
        <div @click="show_get" class="topNice">
          <img
            @click="changeGet"
            :src="isGet ? require('../resourse/image-mao/unnice_n.svg'):require('../resourse/image-mao/nice_n.svg')"
            height="100%"
            width="100%"
          />
        </div>
        <div class="topSearch">
          <mt-search cancel-text="取消" placeholder="输入宠物名称"></mt-search>
        </div>

        <!-- <div>
          <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="100%" width="100%" />
        </div>-->

        <div class="topShare">
          <img
            src="..\resourse\image-mao\share_n.svg"
            alt
            height="100%"
            width="100%"
            @click="actionSheet3"
          />
        </div>
      </div>
    </section>
    <div>
      <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="10%" width="10%" />
    </div>
    <div class="newtop1"></div>
    <div class="bg-color_hui">
      <div class="bingpai">
        <div class="lunbo">
          <mt-swipe :auto="10000">
            <mt-swipe-item>
              <img src="..\resourse\image-mao\bai.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="..\resourse\image-mao\bai2.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="..\resourse\image-mao\bai3.jpg" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <div class="top">
        <div class="relicNames">
          <div class="namesite" style="padding-left:4%" @click="getUUID">小布丁</div>
        </div>
      </div>
      <div class="chooselist">
        <div class="newnav">
          <div class="imglist">
            <img src="..\resourse\image-mao\watch.svg" width="12%" @click="Golunbo2" />
          </div>
        </div>
        <div class="newnav">
          <div class="imglist">
            <img
              :src="changeimg ? require('../resourse/image-mao/shop.svg'):require('../resourse/image-mao/shop2.svg')"
              width="12%"
              @click="GoShop"
            />
          </div>
        </div>
        <div class="newnav">
          <div class="imglist">
            <img src="..\resourse\image-mao\chat.svg" width="12%" @click="GoCollection" />
          </div>
        </div>
      </div>

     <div class="segmentation">
          <img src="" alt="">
    </div>
      <div class="introduction">
        <h4 style="padding-left:4%">基本信息：</h4>
      </div>
      <div v-cloak class="box">
        <div class="infocell">
          喵名：
          <span class="f-color">{{name}}</span>
        </div>
        <div class="infocell">
          种类：
          <span class="f-color">{{zhonglei}}</span>
        </div>
      </div>
      <div v-cloak class="box">
        <div class="infocell">
          宠物性别：
          <span class="f-color">{{xingbie}}</span>
        </div>
        <div class="infocell">
          疫苗情况：
          <span class="f-color">{{yimiao}}</span>
        </div>
      </div>
      <div v-cloak class="box">
        <div class="infocell">
          是否绝育：
          <span class="f-color">{{jueyu}}</span>
        </div>
        <div class="infocell">
          宠物体型：
          <span class="f-color">{{tizhong}}</span>
        </div>
      </div>
      <div v-cloak class="box">
        <div class="infocell">
          出生日期：
          <span class="f-color">{{yeas}}</span>
        </div>
        <div class="infocell">
          最近驱虫：
          <span class="f-color">{{quchong}}</span>
        </div>
      </div>
      <div v-cloak class="box">
        <div class="infocell" style="width:85%">
          宠物性格：
          <span class="f-color">{{xinge}}</span>
        </div>
      </div>
      <div class="infocell imgAngVideo" style="width:85%">
        其他描述：
        <span class="f-color">{{miaoshu}}</span>
      </div>

       <div class="segmentation">
          <img src="" alt="">
    </div>
      <div class="introduction">
        <h4 style="padding-left:4%">
          小布丁的图册：
          <span class="more">
            <img  @click="GoImgPage" src="..\resourse\image-mao\more.svg" alt="更多" height="10%" width="10%" />
          </span>
        </h4>
      </div>
      <div class="bingpai">
      <div class="lunbo">
        <mt-swipe :auto="10000000">
          <mt-swipe-item>
            <img src="..\resourse\image-mao\bai.jpg" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="..\resourse\image-mao\bai2.jpg" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="..\resourse\image-mao\bai3.jpg" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="..\resourse\image-mao\huang1.jpg" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="..\resourse\image-mao\huang2.jpg" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="..\resourse\image-mao\huang3.jpg" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      </div>
      <div class="segmentation">
          <img src="" alt="">
    </div>
      <div class="introduction">
        <h4 style="padding-left:4%">
          小布丁的视频：
          <span class="more" >
            <img @click="GoVideoPage" src="..\resourse\image-mao\more.svg" alt="更多" height="10%" width="10%" />
          </span>
        </h4>
      </div>
       <div>
        <img src="..\resourse\image-mao\changtiao.svg" alt="分割" />
      </div>
      <div v-cloak class="videobox">
        <div class="videocell1" @click="DOVideopopupVisible">
          <div class="videoimage" @click="changev1">
            <img src="..\resourse\mp4-mao\bai.svg" alt="视频截图" />
          </div>
        </div>
        <div class="videocell2">
          <div>
            上传者：
            <span class="f-color">布丁守护者</span>
          </div>
          <div>
            上传时间：
            <span class="f-color">2019-7-10 20：38</span>
          </div>
          <div>
            时长：
            <span class="f-color">2:23</span>
          </div>
        </div>
      </div>
       <div>
        <img src="..\resourse\image-mao\changtiao.svg" alt="分割" />
      </div>
      <div v-cloak class="videobox">
        <div class="videocell1" @click="DOVideopopupVisible">
          <div class="videoimage" @click="changev2">
            <img src="..\resourse\mp4-mao\huang.svg" alt="视频截图" />
          </div>
        </div>
        <div class="videocell2">
          <div>
            上传者：
            <span class="f-color">琦玉</span>
          </div>
          <div>
            上传时间：
            <span class="f-color">2019-6-31 16：38</span>
          </div>
          <div>
            时长：
            <span class="f-color">1:13</span>
          </div>
        </div>
      </div>
       <div>
        <img src="..\resourse\image-mao\changtiao.svg" alt="分割" />
      </div>
      <div v-cloak class="videobox">
        <div class="videocell1" @click="DOVideopopupVisible">
          <div class="videoimage" @click="changev3">
            <img src="..\resourse\mp4-mao\huang0.svg" alt="视频截图" />
          </div>
        </div>
        <div class="videocell2">
          <div>
            上传者：
            <span class="f-color">呼啦啦呼啦啦——呼啦呼啦乎</span>
          </div>
          <div>
            上传时间：
            <span class="f-color">2019-6-24 19：18</span>
          </div>
          <div>
            时长：
            <span class="f-color">0:43</span>
          </div>
        </div>
      </div>
       <div>
        <img src="..\resourse\image-mao\changtiao.svg" alt="分割" />
      </div>
      <div class="collection">
        <section
          class="fixed-icon"
          :style="{ bottom: bottom + 'rem' }"
          :class="[ !transition ? 'fixed-transition' : '']"
          @click="GoUser"
        ></section>
      </div>
    </div>
    <div class="newdownblock">
      <!-- <div class="newfinatitle">广东省博物馆</div> -->
      <div class="newfinaly">版权所有 @2019</div>
      <div class="newfinaly">
        天盛文创 技术支持
      </div>
    </div>

    <div>
      <mt-popup
        class="sharevideoPopup"
        v-model="VideopopupVisible"
        :modal="true"
        :closeOnClickModal="true"
      >
        <div class="video-player vjs-custom-skin" id="video-win">
          <div id="stop-video-win">
            <div @click="stopvideowin">
              <img src="..\resourse\images\goout2.svg" />
            </div>
          </div>
          <video-player
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @ended="onVideoPlayerEnded($event)"
            @pause="onVideoPlayerPause($event)"
            @play="onVideoPlayerPlay($event)"
          ></video-player>
        </div>
      </mt-popup>
    </div>
    <mt-popup class="shareme" v-model="sharewindow" position="bottom">
      <vue-native-share :shareMenu="shareMenu" :config="config" />
    </mt-popup>
    <mt-popup v-model="ruleWin" class="rulepage"  :closeOnClickModal="false">
      <rule-page v-on:gitVelue="showMsgFromRulePage"></rule-page>
    </mt-popup>
  </div>
</template>

 <script>
import RulePage from "../components/RulePage";
import { introduction, Goods } from "../resourse/config.js";
//  import Aplayer from "vue-aplayer";
import { videoPlayer } from "vue-video-player";
import "../../node_modules/video.js/dist/video-js.css";
import "../../node_modules/vue-video-player/src/custom-theme.css";
import { Toast } from "mint-ui";

import vueNativeShare from "vue-native-share"; //分享功能的组件
//  import * as videojs from 'video.js'
export default {
  name: "home",

  components: { videoPlayer, vueNativeShare, RulePage },
  props: {
    bottom: {
      // 改图标距离底部距离 单位 rem
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      transition: true, // 是否触发动画
      timer: null, // 定时器
      dataWen: [
        // {name: '听语音', method : this.DopopupVisible},
        { name: "看视频", method: this.DOVideopopupVisible }
      ],
      sheetVisible1: false,
      sheetVisible2: false,
      sheetVisible3: false,
      videourl: 1,
      isUser: false,
      isNice: false,
      isGet: false,
      ruleWin: true, //条件窗口
      rulemsg: "",
      VideopopupVisible: false,
      agree: true,
      myUuid: "",
      // events: ['change'],

      name: introduction.name,
      zhonglei: introduction.zhonglei,
      yeas: introduction.yeas,
      xingbie: introduction.xingbie,
      tizhong: introduction.tizhong,
      xinge: introduction.xinge,
      miaoshu: introduction.miaoshu,
      jueyu: introduction.jueyu,
      yimiao: introduction.yimiao,
      quchong: introduction.quchong,

      tao_url: Goods.tao_jqmd,
      jing_url: Goods.jing_jqmd,
      isPlaying: false,

      // 把这个 Toast实例 注册到data中，只要在这个组件内部中，都能访问到
      toastInstanse: null,
      nicemse: "",
      getmsg: "",
      isflastmusic: false,
      clickfalse: false,
      miniandfloat: true,
      sharewindow: false, //分享窗口的状态
      changeimg: true, //设置商店图片更换，强硬的动画
      // 视频播放
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "" //url地址
          }
        ],
        poster: "", //你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      shareMenu: [0, 1, 2, 3, 4, 5],//分享组件的目标选择
      config: {
        //分享的信息
        title: "英短-小布丁",
        desc:
          "小布丁是温顺的孩子，最大的爱好是晒太阳和吃东西，它在这里等一个能天天带它去晒太阳的主子",
        img: "http://cdlshow.xyz/resource/bai.jpg",
        img_title: "金漆木雕",
        link: "http://cdlshow.xyz/chongmao",
        success: () => {
          console.log("success");
        }, //成功回调
        cancel: () => {
          console.log("cancel");
        } //取消回调
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  watch: {
    //设置视频和音频不能同时存在
    //监听视频窗口 提取不同的视频路径
    VideopopupVisible() {
      // if (this.VideopopupVisible) this.stopaudeowin();
      if (this.videourl == 1)
        this.playerOptions.sources[0].src =
          "http://cdlshow.xyz/resource/bai1.mp4";
      if (this.videourl == 2)
        this.playerOptions.sources[0].src =
          "http://cdlshow.xyz/resource/huang1.mp4";
      if (this.videourl == 3)
        this.playerOptions.sources[0].src =
          "http://cdlshow.xyz/resource/huang2.mp4";
      if (!this.VideopopupVisible) this.$refs.videoPlayer.player.pause();
    },
    changeimg() {//改商城图片 很麻烦的方式 之后再想办法改
      if (this.changeimg) {
        setTimeout(() => {
          this.changeimg = !this.changeimg;
        }, 700);
      }
      if (!this.changeimg) {
        setTimeout(() => {
          this.changeimg = !this.changeimg;
        }, 700);
      }
    },
    ruleWin() {
      this.ruleWin = false;
    }
  },
 created() {
    //自动执行改变图片的函数
    this.ChangeImg();
    this.ChangeruleWinFromPage();
  },
  methods: {
    getUUID(){//获取uuid 没有就会新建一个
      console.log("旧: ",this.myUuid)
       var uuidFrom = localStorage.getItem('myUuid')
       if(uuidFrom==null){this.setUUID()}
       this.myUuid = localStorage.getItem('myUuid')
       console.log("读出来的: ",this.myUuid)
    },
    setUUID() {//新建一个uuid的函数
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      localStorage.setItem('myUuid', uuid);
      // this.myUuid = uuid;
      console.log("新生成的： ",uuid);
    },
    ChangeruleWinFromPage() {
      //根据返回值·知道 不该显示规则弹窗了
      this.rulemsg = this.$route.params.rulePage;
      if (this.rulemsg != undefined) {
        this.ruleWin = false;
      }
    },
    //每隔0.7秒换商店图片
    ChangeImg() {
      this.changeimg = !this.changeimg;
    },
    showMsgFromRulePage(data) {
      //关闭规则窗口
      this.ruleWin = data;
    },
    event() {
      this.$emit("clickEvent"); // 绑定点击图表时间
    },
    handleScroll() {
      // 每次滑动都会执行函数
      this.transition = false;
      this.timer = setTimeout(() => {
        // 创建定时器
        this.transition = true;
      }, 1000);
    },
    actionSheet1() {
      this.sheetVisible1 = true;
    },

    actionSheet2() {
      this.sheetVisible2 = true;
    },

    actionSheet3() {
      this.sharewindow = true;
    },

    GoImgPage() {
      this.$router.push("/ImgPage");
    },
    GoUser() {
      this.$router.push("/user");
    },

    GoShop() {
      this.$router.push("/Shop");
    },

    GoCollection() {
      this.$router.push("/Chat");
    },

    GoVideoPage() {
       this.$router.push("/VideoPage");
    },

    Golunbo2() {
      //定位函数
      var el = document.getElementsByClassName("imgAngVideo")[0];
      console.log(el.offsetTop);

      this.$nextTick(function() {
        window.scrollTo({ behavior: "smooth", top: el.offsetTop });
      });
    },

    isPlayAudio() {
      this.playAudio();
    },

    changeUser() {
      this.isUser = !this.isUser;
    },

    changeNice() {
      this.isNice = !this.isNice;
    },

    changeGet() {
      this.isGet = !this.isGet;
    },
    changev1() {
      this.videourl = 1;
      // this.VideopopupVisible = true
    },
    changev2() {
      this.videourl = 2;
      // this.VideopopupVisible = true
    },
    changev3() {
      this.videourl = 3;
      // this.VideopopupVisible = true
    },

    // DopopupVisible(){this.popupVisible = true, this.sheetVisible1 = false },
    DOVideopopupVisible() {
      (this.VideopopupVisible = true), (this.sheetVisible1 = false);
    },

    // listen event
    onPlayerPlay() {
      this.popupVisible = true;
      // console.log('player play!', player)
    },
    onPlayerPause() {
      // this.popupVisible = false
      // console.log('player pause!', player)
    },
    onPlayerEnded() {
      this.popupVisible = false;
      // console.log('player ended!', player)
    },

    onVideoPlayerPlay() {
      // this.VideopopupVisible = true
      // console.log('player play!', player)
    },
    onVideoPlayerPause() {
      // this.VideopopupVisible = false
      // console.log('player pause!', player)
    },
    onVideoPlayerEnded() {
      this.VideopopupVisible = false;
      // console.log('player ended!', player)
    },

    show_nice() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      if (this.isNice == false) {
        this.nicemsg = "取消点赞";
      } else {
        this.nicemsg = "已点赞";
      }
      this.toastInstanse = Toast({
        message: this.nicemsg, //弹窗内容
        position: "middle", //弹窗位置
        duration: 1000, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-heart", //设置 图标类
        className: "mytoast_nice" //自定义Toast 样式，需要自己提供一个类名
      });
    },
    show_get() {
      // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
      if (this.isGet == false) {
        this.getmsg = "取消点赞";
      } else {
        this.getmsg = "已点赞";
      }
      this.toastInstanse = Toast({
        message: this.getmsg, //弹窗内容
        position: "middle", //弹窗位置
        duration: 1000, //弹窗时间毫秒,如果值为-1，则不会消失
        iconClass: "glyphicon glyphicon-heart", //设置 图标类
        className: "mytoast_get" //自定义Toast 样式，需要自己提供一个类名
      });
    },
    stopvideowin() {//自定义的关闭
      this.VideopopupVisible = false;
      this.$refs.videoPlayer.player.pause();
    },
    stopaudeowin() {
      this.popupVisible = false;
      this.$refs.myaudeo.pause();
    },
    initBody() {
        // this.opacity =  0.1;
        // this.style = { background: `rgba(43,162,251,0.1)` };
        // this.style = { opacity: 0.1 };
    }
  },
 
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听页面滑动
    // window.addEventListener("scroll", this.initBody); //顶部渐变
  }
};
</script>
 
<style src="../resourse/newhome.css">
</style>



 
 