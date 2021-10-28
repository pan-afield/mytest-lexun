<template>
  <div class="around">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="canvas"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul>
      <li @click="componentId = 'Fruits'">水果</li>
      <li @click="componentId = 'Cars'">轿车</li>
      <li @click="componentId = 'Cigarette'">游戏</li>
      <li @click="componentId = 'Games'">香烟</li>
    </ul>
    <keep-alive> <component :is="componentId"></component></keep-alive>
  </div>
</template>

<script>
import Fruits from "@/pages/around/component/fruits";
import Cars from "@/pages/around/component/cars";
import Cigarette from "@/pages/around/component/cigarette";
import Games from "@/pages/around/component/games";
export default {
  components: {
    Fruits,
    Cars,
    Cigarette,
    Games,
  },
  data() {
    return {
      componentId: "Fruits",
    };
  },
  methods: {
    onClickLeft() {
      window.history.back()
      this.$toast("返回");
    },
    onClickRight() {
      this.$router.push("/canvas");
      this.$toast("按钮");
    },
  },
};
</script>

<style lang='scss' scoped>
.around {
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      height: 80px;
      line-height: 80px;
      border: 1px solid olivedrab;
      background-color: #666;
      color: orangered;
      flex: 1;
    }
  }
}
</style>