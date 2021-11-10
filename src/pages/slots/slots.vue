<template>
  <div class="slots">
    <h3>slot</h3>
    <slotTips
      :show="showDialog"
      @confirm="confirm"
      @cancel="cancel"
      :showCancel="true"
      :title="'新标题'"
      :confirmText="`知道了`"
      :cancelText="`关闭`"
    >
      <template v-slot:tips1='{day}'><p>主题内容1</p><span>{{nick}}</span>{{day}}</template>
      <template v-slot:tips2><p>主题内容2</p><span>{{age}}</span></template>
    </slotTips>
  </div>
</template>

插槽：在当前组件的子组件中可以插入HTML结构。
作用域插槽可以让我们在当前组件调用到子组件的变量。
使用场景：灵活地在当前组件的子组件中插入HTML结构，
当一个子组件在很多地方都有用到，但只有一小块区域有结构上的不同，
那么可以将这一块不同的地方定义为插槽。
<script>
import slotTips from "./slotTips.vue";
export default {
  name: "slots",
  components: {
    slotTips,
  },
  data() {
    return {
      //再子组件的插槽中使用父组件的值
      nick:'jack',
      age:18,
      showDialog: true,
    };
  },
  methods: {
    cancel(show) {
      this.showDialog = show;
    },
    confirm(show) {
      this.showDialog = show;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang='scss' scoped>
.slot {
  width: 100%;
}
</style>
