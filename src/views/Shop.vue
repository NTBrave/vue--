<template>
  <div>
    <!-- <common-footer footerItem="0"></common-footer> -->
    <div>
      <div>
        <!-- <img src="../resourse/image-mao/tao.png" width="100%" height="100%"/> -->
      </div>
    </div>
    <div class="gobacke">
      <div size="sousuo" @click="back">
        <span class="imge1">
          <img src="..\resourse\image-mao\left_hui.svg" alt height="5%" width="5%" />
        </span>
        <span class="imge2">
          <img src="..\resourse\image-mao\sousuo.png" alt height="90%" width="80%" />
        </span>
      </div>
    </div>
    <div class="talking">
      <img src="..\resourse\image-mao\tao.png" alt height="80%" width="100%" />
    </div>
    <div class="daohang">
      <img src="..\resourse\image-mao\daohang.png" alt height="100%" width="100%" />
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
    return {};
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
.item {
  display: inline-block;
}

.nav {
  padding: 10px;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}

.imge1 {
  width: 20%;
  padding-right: 10%;
  /* margin: 0 10% 0 0; */
}
.imge2 {
  /* vertical-align: middle; */
}
.daohang {
  position: fixed;
  left: 0px;
  bottom: 0px;
  /* width: 10%;
            height: 10%; */
  background-color: #eee;
  z-index: 9999;
}
</style>