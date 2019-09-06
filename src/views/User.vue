<template>
  <div class="user">
    <div>
      <img
        src="..\resourse\image-mao\left.svg"
        alt
        height="7%"
        width="7%"
        @click="back"
        style="vertical-align:middle"
      />
      <div class="titleStyle">我</div>
    </div>
    <!--       
    <div>
      <mt-button size="small" @click="back">返回</mt-button>
    </div>-->
    <div class="information">
      <!-- 头像 -->
      <div class="myIcon">
        <img src="..\resourse\image-mao\myIcon.jpg" alt width="100%" height="100%" />
      </div>
      <!-- 名字 -->
      <div class="infor">
        <div>
          <span class="inforMsg moreStyle">{{myName}}</span>
        </div>
        <!-- 账号-->
        <div class="accountStyle">
          账号：
          <span>{{myId}}</span>
        </div>
      </div>
      <div class="setInfor">
        <img src="..\resourse\image-mao\set.svg" alt width="100%" height="100%" />
      </div>
      <div class="setInforGo">
        <img src="..\resourse\image-mao\right.svg" alt width="50%" height="50%" />
      </div>
    </div>
    <div class="segmentation">
      <img src alt />
    </div>
    <!-- Uuid -->
    <!-- <div>{{myUuid}}</div> -->
    <!-- 收藏历史 -->
    <div class="someCollection">
      <div>
        <img
          src="..\resourse\image-mao\nice_huang.svg"
          alt
          height="5%"
          width="5%"
          style="vertical-align:middle"
        />
        <div class="listStyle">收藏列表</div>
      </div>
      <mt-cell v-for="browse in myBrowse" :title="browse" :key="browse"></mt-cell>
    </div>
    <div class="segmentation">
      <img src alt />
    </div>
    <!-- 浏览历史 -->
    <div class="someHistory">
      <div>
        <img
          src="..\resourse\image-mao\history.svg"
          alt
          height="5%"
          width="5%"
          style="vertical-align:middle"
        />
        <div class="listStyle">浏览历史</div>
      </div>
      <mt-cell v-for="collect in myCollection" :title="collect" :key="collect"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "userpage",
  data() {
    return {
      myId: "",
      // myIcon:"",
      myName: "布丁守护者",
      myAccount: "2157",
      myBrowse: [1, 2, 3, 4],
      myCollection: [1, 2, 3, 4]
    };
  },

  created() {
    this.getMyId();
  },
  methods: {
    getMyId() {
      this.myId = localStorage.getItem("myUuid");
    },
    back() {
      this.$router.push({
        name: "Newhome",
        params: {
          rulePage: "false"
        }
      });
    }
  }
};
</script>
<style scoped>
.information {
  width: 100%;
  height: 10%;
  display: flex;
  /* border: 3px solid rgb(8, 131, 131); */
}
.myIcon {
  margin: 2% 4% 2% 2%;
  width: 20%;
  height: 100%;
  /* border: 2px solid rgb(23, 21, 173); */
}

.infor {
  /* margin: 4%; */
  width: 50%;
  height: 100%;
  padding-top: 5%;
  /* border: 1px solid rgb(192, 91, 9); */
  color: rgba(0, 0, 0, 0.37);
}
.setInfor {
  margin-left: 5%;
  width: 5%;
  height: 20%;
  padding-top: 15%;
  /* border: 1px solid rgb(192, 91, 9); */
}
.setInforGo {
  margin-left: 3%;
  width: 5%;
  height: 20%;
  padding-top: 15%;
  /* border: 1px solid rgb(9, 192, 116); */
}
.inforMsg {
  color: black;
}
.moreStyle {
  font-weight: bold;
  font-size: 4vw;
}
.accountStyle {
  margin-top: 9%;
}
.segmentation {
  width: 100%;
  height: 2%;
  margin-top: 2%;
  background-color: rgba(205, 205, 205, 0.253);
  position: absolute;
  right: 0px;
  left: 0px;
}
.someCollection {
  margin-top: 7%;
  /* border: 1px solid rgb(192, 9, 122); */
}
.someHistory {
  margin-top: 7%;
  /* border: 1px solid rgb(192, 9, 122); */
}
.listStyle {
  /* 图片和文字在同一直线上的 */
  display: inline-block;
  vertical-align: middle;
  margin-left: 4%;
}
.titleStyle {
  display: inline-block;
  vertical-align: middle;
  padding-left: 45%;
  font-weight: bold;
}
</style>

