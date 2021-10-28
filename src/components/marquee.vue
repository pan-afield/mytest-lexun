<template>
  <div class="marquee">
    <div class="contain">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{
            'three-li': index === 3,
            'four-li': index === 4,
            'five-li': index === 5,
            'six-li': index === 6,
            'seven-li': index === 7,
            'change-color': nums === index,
          }"
        >
          {{ item }}
        </li>
        <li @click="run()" class="center">开始</li>
      </ul>
    </div>
    <div
      class="back"
      style="color: red; margin-top: 200px"
      @click="$router.go(-1)"
    >
      back
    </div>
  </div>
</template>

<script>
let timer;
export default {
  data() {
    return {
      interval: 500,
      runorpuase: false,
      step: 0,
      nums: 0,
      list: [0, 1, 2, 3, 4, 5, 6, 7],
      stepMax: 0,
      stepMin: 0,
      stepFixed: 0,
    };
  },
  computed: {},
  methods: {
    //计算跑动部属函数
    computedStep() {
      this.step = 30;
    },
    //跑马灯跑动速度控制函数
    ccc() {
      timer = setInterval(() => {
        // console.log(this.interval);
        if (this.step) {
          this.step--;
          if (this.step <= 5) {
            this.interval = this.interval + 160;
            clearInterval(timer);
            this.ccc(this.interval);
          } else if (this.stepMin <= this.step && this.step <= this.stepMax) {
            this.interval = this.interval - 80;
            clearInterval(timer);
            this.ccc(this.interval);
          } else {
            this.interval = 100;
            clearInterval(timer);
            this.ccc(this.interval);
          }
          if (this.nums === 7) {
            this.nums = 0;
          } else {
            this.nums++;
          }
        } else {
          this.runorpuase = !this.runorpuase;
          clearInterval(timer);
        }
      }, this.interval);
    },
    //跑马灯开始函数
    run() {
      if (this.runorpuase) return;
      this.computedStep();
      this.stepMax = this.step;
      this.stepMin = this.step - 5;
      this.runorpuase = !this.runorpuase;
      setTimeout(() => {
        this.nums++;
      }, 0);
      this.ccc(this.interval);
    },
  },
};
</script>

<style lang='scss' scoped>
ul {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 33.33%;
    height: 100px;
    line-height: 100px;
    color: red;
    font-size: 16px;
    background-color: skyblue;
  }
  .center {
    position: absolute;
    left: 33.33%;
    top: 100px;
  }
  .three-li {
    position: absolute;
    right: 0;
    top: 100px;
  }
  .four-li {
    position: absolute;
    right: 0;
    top: 200px;
  }
  .five-li {
    position: absolute;
    right: 33.33%;
    top: 200px;
  }
  .six-li {
    position: absolute;
    left: 0;
    top: 200px;
  }
  .seven-li {
    position: absolute;
    left: 0;
    top: 100px;
  }
  .change-color {
    background: orange;
    color: seagreen;
  }
}
</style>