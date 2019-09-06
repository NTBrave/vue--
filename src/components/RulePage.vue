<template>
  <div class="RulePage">
    <div class="bgimg">
      <div class="rulemsg">
        <div style="font-weight: bold">禧猫须知：</div>
        <div class="rules">
          <img src="..\resourse\image-mao\number\number1.svg" alt height="5%" width="5%" />
          <span>本场所确保所辖范围内猫咪均符合动物防疫标准。</span>
        </div>
        <div class="rules">
          <img src="..\resourse\image-mao\number\number2.svg" alt height="5%" width="5%" />
          <span>在本场所内与猫咪接触，应充分了解猫的习性，对猫温柔对待。</span>
        </div>
        <div class="rules">
          <img src="..\resourse\image-mao\number\number3.svg" alt height="5%" width="5%" />
          <span>在本场所中对发生猫咪抓伤、咬伤等事故情况，本场所概不负责。</span>
        </div>
        <div class="mybutton">
          <mt-button type="primary" @click.native="back">
            <!-- <img src="..\resourse\image-mao\ag.svg" height="50%" width="50%"> -->
            我已知悉并承诺遵守规定
          </mt-button>
        </div>
      </div>
      <!-- <img src="..\resourse\image-mao\bg_rule.png" alt="相关规定" width="100%" height="100%" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "rulepage",
  data() {
    return {
      isagree: false
    };
  },

  methods: {
    back() {
      //传值出去
      this.$emit("gitVelue", this.isagree);
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
}
.rulemsg {
  padding-top: 5%;
  padding-left: 4%;
  padding-right: 4%;
  background-color: #fff;
  color: rgb(0, 0, 0);
  border-radius: 10px;
}
.rules {
  display: inline-block;
  vertical-align: middle;
  margin-top: 3%;
}
.rules img {
  vertical-align: middle;
  margin-right: 3%;
}
.mybutton {
  text-align: center;
  margin-top: 5%;
}
</style>
