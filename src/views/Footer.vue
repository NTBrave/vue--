<template>
  <div class="footer">
    <div
      class="item"
      v-for="(item,index) of itemList"
      :key="index"
      :class="footerItem === index ? 'active' : ''"
    >
      <img :src="index===idx?item.iconSelect:item.icon" />
      <div class="item-name">{{item.itemName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonFooter",
  data() {
    return {
      itemList: [
        {
          icon: "../resourse/image-mao/shouye.svg",
          iconSelect: "../resourse/image-mao/shouye.svg",
          itemName: "首页"
        },
        {
           icon: "../resourse/image-mao/fenlei.svg",
          iconSelect: "../resourse/image-mao/fenlei.svg",
          itemName: "发现"
        },
        // {
        //   itemIcon: "&#xe6af;",
        //   itemName: "购物车"
        // },
        {
          icon: "../resourse/image-mao/wode.svg",
          iconSelect: "../resourse/image-mao/wode.svg",
          itemName: "我的"
        }
      ]
    };
  },
  props: {
    footerItem: String
  }
};
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7%;
  background: #efefef;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
  text-align: center;
}
.item-icon {
  font-size: 1rem;
}

.item-name {
  font-size: 1rem;
  color: #595757;
  margin-top: 0.08rem;
}

.active {
  color: #ff4800;
}
.item-icon,
.item-name {
}
</style>
