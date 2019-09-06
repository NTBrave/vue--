<template>
  <div><div>
      <img src="..\resourse\image-mao\nothing.svg" alt="空白" height="7%" width="7%" />
    </div>
    <div  class="floatTop">
      <img
        src="..\resourse\image-mao\left.svg"
        alt
        @click="back"
        style="vertical-align:middle"
      />
      <div class="titleStyle">图册</div>
    </div>

    <div id="container">
  <ul class="imgUl">
    <li v-for="item in imgList" :key="item" class="imgLi">
      <img v-lazy.container="item">
    </li>
  </ul>
</div>

  </div>
</template>

<script>
// import CommonFooter from "./Footer";
export default {
  name: "shop",
  components: {
    // CommonFooter
  },
  data() {
    return {
      imgList: [
        "http://cdlshow.xyz/resource//maoImage/bai.jpg",
        "http://cdlshow.xyz/resource//maoImage/bai2.jpg",
        "http://cdlshow.xyz/resource//maoImage/bai3.jpg",
          "http://cdlshow.xyz/resource//maoImage/huang1.jpg",
        "http://cdlshow.xyz/resource//maoImage/huang2.jpg",
        "http://cdlshow.xyz/resource//maoImage/huang3.jpg",
      ]
    };
  },

  methods: {
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
<style lang="css" scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  /* margin: auto; */
}
.titleStyle {
  display: inline-block;
  vertical-align: middle;
  padding-left: 45%;
  font-weight: bold;
}
ul{
    /* 去除前面的点 */
    list-style: none;

}
.imgUl{
    /* border: 1px solid rgb(76, 0, 255); */
    width: 100%;
    height: 100%;
    /* margin: 0 0 20%; */
}
.imgLi{
    /* border: 1px solid rgb(11, 206, 59); */
     width: 80%;
    height: 100%;
}
.imgLi img{
 width: auto;
    max-width: 100%;

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