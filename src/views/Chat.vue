<template>
  <div class="chat" id="chatting">
    <!-- <div>
      <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="9%" width="9%" />
    </div> -->
    <div class="floatTop">
      <img src="..\resourse\image-mao\left.svg" alt @click="back" style="vertical-align:middle" />
      <div class="titleStyle">小布丁的日常</div>
    </div>
    <div id="bigMsgList">
      <div v-for="(message, index) in messageList" :key="index" class="chatting-content">
        <div class="timeFont">{{message.msgTime}}</div>
        <div class="oneMsg">
          <div class="oneMsgIcon">
            <div v-if="message.msgIcon != ''">
              <img :src="message.msgIcon" alt="Ta的头像" width="50px" height="50px" />
            </div>
            <div v-else>
              <img
                src="http://cdlshow.xyz/resource/userIcon/myIcon.jpg"
                alt="Ta的头像"
                width="50px"
                height="50px"
              />
            </div>
          </div>
          <div class="oneMsgShow">
            <div class="msgUserName">{{message.msgName}}</div>
            <div class="msgTextStyle" v-if="message.msgText != ''">{{message.msgText}}</div>
            <div v-if="message.msgImg != ''" class="userSendImg">
              <img :src="message.msgImg" alt="Ta发了一张图片" width="100%" />
            </div>
            <div v-if="message.msgVideo != ''">{{message.msgVideo}}</div>
            <div v-if="message.msgemojis != ''">{{message.msgemojis}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="7%" width="7%" />
    </div> -->
    <!-- 输入区域 -->
    <div class="chatting-input">
      <!-- 表情库 -->
      <transition name="slide-bottom">
        <div v-show="isShowEmoji" class="emoji-display">
          <li @click="insertText()" v-for="(item,index) of emojis" :key="index">{{item}}</li>
        </div>
      </transition>

      <div class="emoji">
        <!-- <i @click="showEmoji()" class="icon-emoji"></i> -->
        <img src="..\resourse\image-mao\smile.svg" alt="表情" @click="showEmoji()" class="icon-emoji" />
      </div>
      <textarea
        @keyup.enter="send"
        id="textMsg"
        v-model="notedata"
        ref="textarea"
        placeholder="聊一聊吧"
      ></textarea>
      <button @click="send">发送</button>
    </div>

    <!-- <div class="talking">
      <img src="..\resourse\image-mao\index.jpg" alt height="100%" width="100%" />
    </div>-->
  </div>
</template>

<script>
export default {
  name: "fixedIcon",

  data() {
    return {
      ruleWin: false,
      isShowEmoji: false,
      // isShowEmoji: true,
      inputContent: "",
      oContent: {},
      oTextarea: {},
      notedata: null,
      emojis: [
        "😂",
        "🙏",
        "😄",
        "😏",
        "😇",
        "😅",
        "😌",
        "😘",
        "😍",
        "🤓",
        "😜",
        "😎",
        "😊",
        "😳",
        "🙄",
        "😱",
        "😒",
        "😔",
        "😷",
        "👿",
        "🤗",
        "😩",
        "😤",
        "😣",
        "😰",
        "😴",
        "😬",
        "😭",
        "👻",
        "👍",
        "✌️",
        "👉",
        "👀",
        "🐶",
        "🐷",
        "😹",
        "⚡️",
        "🔥",
        "🌈",
        "🍏",
        "⚽️",
        "❤️",
        "🇨🇳"
      ],
      messageList: [
        {
          msgTime: "2019/7/20 15:14",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon1.png",
          msgName: "看看小乖乖",
          msgText: "布丁中午吃了啥",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 15:20",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon2.png",
          msgName: "喵大人",
          msgText: "麦片",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 15:20",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon1.png",
          msgName: "看看小乖乖",
          msgText: "感觉它好像生病了",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:14",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon3.png",
          msgName: "布丁守护者",
          msgText: "？？？",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:15",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon3.png",
          msgName: "布丁守护者",
          msgText: "真的？",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:16",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon2.png",
          msgName: "喵大人",
          msgText: "",
          msgImg: "http://cdlshow.xyz/resource/userIcon/what.png",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:17",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon2.png",
          msgName: "喵大人",
          msgText: "是你们喂多了吧",
          msgImg: "",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:17",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon2.png",
          msgName: "喵大人",
          msgText: "",
          msgImg: "http://cdlshow.xyz/resource/maoImage/bai.jpg",
          msgVideo: "",
          msgemojis: ""
        },
        {
          msgTime: "2019/7/20 16:17",
          msgIcon: "http://cdlshow.xyz/resource/userIcon/userIcon2.png",
          msgName: "喵大人",
          msgText: "",
          msgImg: "http://cdlshow.xyz/resource/maoImage/bai2.jpg",
          msgVideo: "",
          msgemojis: ""
        }
      ]
    };
  },
  mounted() {
    //刚开始就滚到底部
     this.scrollToBottom();
  },
  watch: {
    messageList() {
      //消息列表更新就 就滚到底部
      this.scrollToBottom();
    }
  },
  methods: {
    back() {
      // console.log(this.ruleWin);
      this.$router.push({
        name: "Newhome",
        params: {
          rulePage: "false"
        }
      });
    },
    insertText() {},
    send() {
      this.oTextarea.msgTime = "2019/7/20 16:55";
      this.oTextarea.msgIcon =
        "http://cdlshow.xyz/resource/userIcon/myIcon.jpg";
      this.oTextarea.msgName = "布丁守护者";
      this.oTextarea.msgText = this.$refs.textarea.value;
      this.oTextarea.msgImg = "";
      this.oTextarea.msgVideo = "";
      this.oTextarea.msgemojis = "";
      this.messageList.push(this.oTextarea);
      this.oTextarea = {}; //发送清空
      this.notedata = null; //发送清空z
      this.DownDown;
    
    },
    scrollToBottom() {
      this.$nextTick(() => {
        setTimeout(() => {
          var scrollTop = this.$el.querySelector("#bigMsgList");
          scrollTop.scrollTop = scrollTop.scrollHeight;
        }, 0);
      });
    },
    showEmoji() {
      this.isShowEmoji = !this.isShowEmoji;
    }
  }
};
</script>
<style scoped>
.chat{
overflow: hidden;
}
.floatTop {
  /* position: fixed; */
  left: 0px;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 4%;
  background-color: #fff;
  padding: 2% 0 2% 1%;
  /* border: 1px solid rgb(250, 146, 11); */

}
.titleStyle {
  display: inline-block;
  vertical-align: middle;
  padding-left: 30%;
  font-weight: bold;
}
.talking {
  z-index: 1;
}

#bigMsgList {
  /* border: 1px solid rgb(63, 11, 250); */
  background-color: rgba(155, 155, 155, 0.089);
  width: 100%;
  height: 50%;
  border-radius: 9px;
  /* margin: 0; */
  /* overflow-x: hidden; */
  overflow:auto;
  flex: 1;
  overflow-y: scroll;
  /* scrollbar-base-color:rgb(250, 11, 218); */
}
.userSendImg {
  max-width: 200px;
  max-height: 300px;
}

.oneMsgShow {
  /* border: 1px solid rgb(18, 209, 75); */
  width: 100%;
  margin-left: 3%;
  font-size: 4vw;
}
.msgUserName {
  margin-bottom: 3%;
  font-size: 3vw;
}
.msgTextStyle {
  width: 80%;
  background-color: rgb(255, 255, 255);
  padding: 2% 2% 2% 2%;
  border-radius: 9px;
}
.oneMsg {
  /* border: 1px solid rgb(209, 18, 18); */
  width: 70%;
  display: flex;
  margin-left: 3%;
  margin-bottom: 2%;
  padding-bottom: 2%;
}
.oneMsgIcon {
  /* border: 1px solid rgb(203, 18, 209); */
}
.timeFont {
  color: rgba(0, 0, 0, 0.37);
  font-size: 3vw;
  text-align: center;
  /* margin: 3% 0 3% 0; */
  /* border: 1px solid rgb(31, 18, 209); */
}

.chatting-input {
  /* border: 1px solid rgb(63, 11, 250); */

  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 7%;
  display: flex;
  background-color: white;
  z-index: 999;
}

.emoji-display {
  position: absolute;
  width: 100%;
  height: 210px;
  background-color: white;
  top: -210px;
  left: 0;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

li {
  padding: 2px 3px;
  font-size: 2.2rem;
}

.emoji {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  margin: 1% 0 1% 1%;

  /* background-color: rgba(0, 0, 0, 0.1); */
  /* background-image: url("../resourse/image-mao/smile.svg") */
}
.icon-emoji {
  width: 80%;
  height: 80%;
  /* background: url("../resourse/image-mao/smile.svg") no-repeat; */
  background-size: contain;
}

textarea {
  flex: 1;
  /* resize: none; */
  width: 73%;
  /* height: 100%; */
  margin: 1% 2% 1% 2%;
  /* padding-left: 3px; */
  /* padding-top: 7px; */
  /* padding-right: 3px; */
  /* height: 100%; */
  font-size: 4vw;
  border-color: #eee;
  border-radius: 12px;
}
button {
  width: 15%;
  /* height: 100%; */
  font-size: 4vw;
  background-color: #1296db;
  color: white;
  border: none;
  margin: 1% 1% 1% 0;
  border-radius: 9px;
  font-size: 3vw;
  /* font-size: 16px; */
}
</style>
