<template>
  <div><div>
      <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="7%" width="7%" />
    </div>
    <div class="floatTop">
      <img
        src="..\resourse\image-mao\left.svg"
        alt
      
        @click="back"
        style="vertical-align:middle"
      />
      <div class="titleStyle">它的视频</div>
    </div>
    <ul id="BageList">
      <li v-for="(video, index) in videoList" :key="index">
        <div class="AVideo">
          <div class="videoShot" @click="changev(video.videoPath)">
            <img :src="video.videoBuffer" width="200px" height="200px" />
          </div>
          <div class="videoAllMsg">
            <div>
              上传者：
              <span class="videoMsg">{{video.uploader}}</span>
            </div>
            <div>
              上传时间：
              <span class="videoMsg">{{video.timefrom}}</span>
            </div>
            <div>
              时长：
              <span class="videoMsg">{{video.videoTime}}</span>
            </div>
          </div>
        </div>
        <div>
          <img src="..\resourse\image-mao\changtiao.svg" alt="分割" width="100%" height="100%" />
        </div>
      </li>
    </ul>
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
        <video-player ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
      </div>
    </mt-popup>
  </div>
</template>

<script>
// import { videoPlayer } from "vue-video-player";
import "../../node_modules/video.js/dist/video-js.css";
import "../../node_modules/vue-video-player/src/custom-theme.css";
export default {
  name: "shop",
  components: {
    // CommonFooter
  },
  data() {
    return {
      videoList: [
        {
          uploader: "布丁守护者",
          timefrom: "2019-7-10 20：38",
          videoTime: "2:23",
          videoBuffer: "http://cdlshow.xyz/resource/mp4-mao/bai.svg",
          videoPath: "http://cdlshow.xyz/resource/mp4-mao/bai1.mp4"
        },
        {
          uploader: "琦玉",
          timefrom: "2019-6-31 16：38",
          videoTime: "1:13",
          videoBuffer: "http://cdlshow.xyz/resource/mp4-mao/huang.svg",
          videoPath: "http://cdlshow.xyz/resource/mp4-mao/huang1.mp4"
        },
        {
          uploader: "呼啦啦呼啦啦——呼啦呼啦乎",
          timefrom: "2019-6-24 19：18",
          videoTime: "0:43",
          videoBuffer: "http://cdlshow.xyz/resource/mp4-mao/huang0.svg",
          videoPath: "http://cdlshow.xyz/resource/mp4-mao/huang2.mp4"
        },
        // {
        //   uploader: "",
        //   timefrom: "",
        //   videoTime: "",
        //   videoBuffer: "",
        //   videoPath: ""
        // },
        // {
        //   uploader: "",       
        //   timefrom: "",
        //   videoTime: "",
        //   videoBuffer: "",
        //   videoPath: ""
        // },
        // {
        //   uploader: "",
        //   timefrom: "",
        //   videoTime: "",
        //   videoBuffer: "",
        //   videoPath: ""
        // }
      ],
      VideopopupVisible: false,
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
            src: "http://cdlshow.xyz/resource/mp4-mao/bai1.mp4" //url地址
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
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  watch: {
    //监听视频窗口 窗口关闭视频播放就停止
    VideopopupVisible() {
      if (!this.VideopopupVisible) this.$refs.videoPlayer.player.pause();
    }
  },
  methods: {
    back() {
      this.$router.push({
        name: "Newhome",
        params: {
          rulePage: "false"
        }
      });
    },
    changev(path) {
      //设置视频路径
      // console.log(path);
      this.playerOptions.sources[0].src = path;
      this.VideopopupVisible = true;
      //   this.videourl = indexId;
    },

    // DOVideopopupVisible() {
    //   this.VideopopupVisible = true;
    // },
    // onVideoPlayerEnded() {//结束自动关闭
    //   this.VideopopupVisible = false;
    //   // console.log('player ended!', player)
    // },
    stopvideowin() {
      //自定义的关闭按钮
      this.VideopopupVisible = false;
      this.$refs.videoPlayer.player.pause();
    }
  }
};
</script>
<style lang="css" scoped>
.titleStyle {
  display: inline-block;
  vertical-align: middle;
  padding-left: 35%;
  font-weight: bold;
}
/* #BageList{
    border: 2px solid rgb(209, 18, 18);
    position:absolute;
    left: 0px;
    right: 0px;
} */
ul {
  /* 去除前面的点 */
  list-style: none;
}
.AVideo {
  width: 100%;
  display: flex;
  color: rgba(0, 0, 0, 0.37);
  left: 0px;
  /* border: 2px solid rgb(23, 21, 173); */
}
.videoShot img {
  margin: 4%;
  width: auto;
  max-width: 100%;
  vertical-align: middle;
  /* width: auto; */
  /* max-width: 100%; */
}
.videoAllMsg {
  width: 60%;
  display: inline-block;
  vertical-align: middle;
  margin: 10%;
  /* border: 1px solid rgb(192, 91, 9); */
}
.videoMsg {
  /* border: 1px solid rgb(9, 192, 116); */
  color: #000;
  font-size: 3.5vw;
}
.floatTop{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  width: 100%;
  background-color: #fff;
  padding: 2% 0 2% 1%;
}
</style>