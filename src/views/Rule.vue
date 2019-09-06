<template>
  <div class="rule">
    <div class="bgimg">
      <div class="rulemsg">
        <div>禧猫须知：</div>
        <div><img src="..\resourse\image-mao\nothing.svg" alt="" height="4%" width="4%"><span>
            本场所确保所辖范围内猫咪均符合动物防疫标准。</span></div>
        <div><img src="..\resourse\image-mao\nothing.svg" alt="" height="4%" width="4%"><span>
            在本场所内与猫咪接触，应充分了解猫的习性，对猫温柔对待。</span></div>
        <div><img src="..\resourse\image-mao\nothing.svg" alt="" height="4%" width="4%"><span>
            在本场所中对发生猫咪抓伤、咬伤等事故情况，本场所概不负责。</span></div>
        <div class="mybutton">
            
          <mt-button type="primary" @click.native="back">
              <!-- <img src="..\resourse\image-mao\ag.svg" height="50%" width="50%"> -->
              我已充分了解，并承诺遵守
              </mt-button>
        </div>
      </div>

      <img src="..\resourse\image-mao\bg_rule.png" alt="相关规定" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "rulepage",
  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.push("/home");
    }
  }
};
</script>
<style  scoped>
.rule {
  width: 100%;
  height: 100%;
   font-family: 微软雅黑;

}
.bgimg {
  width: 100%;
  height: 100%;
  /* background-image: url("../resourse/image-mao/bg_rule.png");
  background-position: center 0;
  background-size: 100%;
  background-repeat: no-repeat; */
}
.rulemsg {
  width: 80%;
  height: 40%;

  margin-top: 40%;
  margin-left: 6%;
  margin-right:6%;

padding-top:5%;
  padding-left: 4%;
  padding-right: 4%;

  position: fixed;
  /* margin-right:20%; */
  background-color: rgba(131, 131, 131, 0.5);
  color: #fff;
  border-radius: 5%;
  font-weight: bold;
}
.mybutton {
    text-align: center;
  margin-top: 4%;
}
</style>
