<template>
  <div class="play">
    <h3 @click="$router.go(-1)">back</h3>
    <div>{{ drag ? "拖拽中" : "拖拽停止" }}</div>
    <draggable
      v-model="myArray"
      chosenClass="chosen"
      forceFallback="true"
      group="people"
      animation="1000"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group>
        <div class="item" v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      myArray: [
        { people: "cn", id: 1, name: "www.itxst.com" },
        { people: "cn", id: 2, name: "www.baidu.com" },
        { people: "cn", id: 3, name: "www.taobao.com" },
        { people: "us", id: 4, name: "www.google.com" },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
/*选中样式*/
.chosen {
  border: solid 2px #3089dc !important;
}
</style>