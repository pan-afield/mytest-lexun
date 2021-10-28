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
