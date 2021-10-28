<template>
  <div class="dialog" v-if="showSelf" :style="{ 'z-index': zIndex }">
    <div
      class="dialog-mark"
      @click.self="closeMyself"
      :style="{ 'z-index': zIndex + 1 }"
    ></div>
    <transition name="dialog">
      <div class="dialog-sprite" :style="{ 'z-index': zIndex + 2 }">
        <!-- 标题 -->
        <section v-if="title" class="header">{{ title }}</section>

        <!-- 弹窗的主题内容 -->
        <section class="dialog-body">
          <slot name="tips1" :day="day"></slot>
          <slot name="tips2"></slot>
        </section>

        <!-- 按钮 -->
        <section class="dialog-footer">
          <div v-if="showCancel" class="btn btn-refuse" @click="cancel">
            {{ cancelText }}
          </div>
          <div class="btn btn-confirm" @click="confirm">{{ confirmText }}</div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    //弹窗组件是否显示 默认不显示 必传属性
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    title: String,
    showCancel: {
      typs: Boolean,
      default: false,
      required: false,
    },
    cancelText: {
      type: String,
      default: "取消",
      required: false,
    },
    confirmText: {
      type: String,
      default: "确定",
      required: false,
    },
  },
  data() {
    return {
      name: "dialog",
      showSelf: false,
      zIndex: this.getZIndex(),
      bodyOverflow: "",
      day: "firstDay",
    };
  },
  watch: {
    show(val) {
      if (!val) {
        this.closeMyself();
      } else {
        this.showSelf = val;
      }
    },
  },
  created() {
    console.log(document.body.style.overflow);
    this.showSelf = this.show;
  },
  mounted() {
    this.forbidScroll();
  },
  methods: {
    /**  每次获取之后 zindex 自动增加 */
    getZIndex() {
      let zIndexInit = 20190315;
      return zIndexInit++;
    },

    /** 取消按钮操作 */
    cancel() {
      this.$emit("cancel", false);
    },

    /** 确认按钮操作 */
    confirm() {
      this.$emit("confirm", false);
    },
    /** 禁止页面滚动 */
    forbidScroll() {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    },

    /** 点击遮罩关闭弹窗 */
    closeMyself(event) {
      this.showSelf = false;
      this.sloveBodyOverflow();
    },

    /** 恢复页面的滚动 */
    sloveBodyOverflow() {
      document.body.style.overflow = this.bodyOverflow;
    },
  },
};
</script>


<style lang="scss" scoped>
// 弹窗动画
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.5s;
}

.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}

// 最外层 设置position定位
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  // 内容层 z-index要比遮罩大，否则会被遮盖
  .dialog-mark {
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .dialog-sprite {
    // 移动端使用felx布局
    position: absolute;
    top: 10%;
    left: 15%;
    right: 15%;
    bottom: 25%;
    display: flex;
    flex-direction: column;
    max-height: 75%;
    min-height: 180px;
    overflow: hidden;
    z-index: 23456765435;
    background: #fff;
    border-radius: 8px;
    .header {
      padding: 15px;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .dialog-body {
      flex: 1;
      overflow-x: hidden;
      overflow-y: scroll;
      padding: 0 15px 20px 15px;
    }
    .dialog-footer {
      position: relative;
      display: flex;
      width: 100%;
      // flex-shrink: 1;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ddd;
        transform: scaleY(0.5);
      }
      .btn {
        flex: 1;
        text-align: center;
        padding: 15px;
        font-size: 17px;
        &:nth-child(2) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: #ddd;
            transform: scaleX(0.5);
          }
        }
      }
      .btn-confirm {
        color: #43ac43;
      }
    }
  }
}
</style>
