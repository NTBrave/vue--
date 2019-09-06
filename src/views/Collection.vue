<template>
  <div class="collection">
    <div class="gohome">
      <div size="small" @click="back"> <img src="..\resourse\image-mao\left.svg" alt height="10%" width="10%" /><span>
        <img src="..\resourse\image-mao\xiao.png" alt height="80%" width="80%" />
        </span></div>
    </div>
    <div class="talking">
      <img src="..\resourse\image-mao\index.jpg" alt height="100%" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "fixedIcon",

  data() {
    return {
      transition: true, // 是否触发动画
      timer: null // 定时器
    };
  },
  methods: {
    back() {
      this.$router.push("/home");
    }
  }
};
</script>
<style scoped>
.talking {
  /* display: flex; */
  /* position: fixed; */
  /* width: 100%; */
  /* height: 100%; */
  /* background-image: url('../resourse/image-mao/index.jpg'); */
  /* border: 1px solid rgb(76, 0, 255); */
  z-index: 1;
}
/* .gohome{
    z-index: 1100;
    position: relative;
  } */
</style>
