<template>
  <div class="test2">
    <van-nav-bar
      title="hello2"
      left-text="返回"
      right-text="around"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="box"></div>
    <div class="" style="">
      <div class="page-example3" style="">
        <vue-seamless-scroll :data="listData" :class-option="defaultOption">
          <ul class="ul-scoll">
            <li v-for="(item, index) in listData" :key="index">
              <span class="title">{{ item.title }}：</span
              ><span class="date">{{ item.time }}</span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <h3 @click="happyClock" style="color: red">欢乐倒计时</h3>
    <h4 @click="turnRun">转</h4>
    <h4 @click="toZero">归零</h4>
    <div
      :style="{
        transform: `rotate(${transform_cricle}deg)`,
        transitionProperty: change,
      }"
      class="countDown"
    >
      <span>{{ hours }}</span
      >:<span>{{ minutes }}</span
      >:<span>{{ seconds }}</span>
    </div>
    <!-- 幸运抽奖 -->
    <img
      @touchstart="Tstart"
      @touchmove="move"
      @touchend="end"
      id="dragImg"
      draggable="true"
      :style="{ left: position.x + 'px', top: position.y + 'px' }"
      src="@/assets/cute-pao.png"
      alt=""
    />
    <div
      id="fitBox"
      style="
        width: 70px;
        height: 70px;
        background-color: #774499;
        margin: 30px auto;
      "
    ></div>
    <div class="jump" @click="$router.push('/drag')">jump</div>
  </div>
</template>

<script>
// 鼠标位置和div的左上角位置 差值
var dx, dy;
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: {
    vueSeamlessScroll,
  },
  computed: {
    defaultOption() {
      return {
        step: 0.4, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: false, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 40, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  data() {
    return {
      position: {
        x: 0,
        y: 0,
      },
      flags: false, //拖动属性
      num: "",
      change: "all",
      transform_cricle: 0,
      listData: [],
      hours: "00",
      minutes: "00",
      seconds: "00",
      start: true,
      timer: "",
      expire: "",
    };
  },
  methods: {
    Tstart(e) {
      e.preventDefault();
      e.stopPropagation();
      this.flags = true;
      var touch;
      console.log(e);
      if (e.touches) {
        touch = e.touches[0];
      } else {
        touch = e;
      }
      console.log("鼠标点所在位置", touch.clientX, touch.clientY);
      console.log("div左上角位置", e.target.offsetLeft, e.target.offsetTop);
      dx = touch.clientX - e.target.offsetLeft;
      dy = touch.clientY - e.target.offsetTop;
      console.log(dx, dy);
    },
    move(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.flags) {
        let touch;
        if (e.touches) {
          touch = e.touches[0];
        } else {
          touch = e;
        }
        // 定位滑块的位置
        this.position.x = touch.clientX - dx;
        this.position.y = touch.clientY - dy;
        if (this.position.x < 0) {
          this.position.x = 0;
        } else if (this.position.x > screenWidth - touch.target.clientWidth) {
          this.position.x = screenWidth - touch.target.clientWidth;
        }
        if (this.position.y < 0) {
          this.position.y = 0;
        } else if (this.position.y > screenHeight - touch.target.clientHeight) {
          this.position.y = screenHeight - touch.target.clientHeight;
        }
      }
    },
    end(e) {
      e.preventDefault();
      e.stopPropagation();
      this.flags = false;
    },
    toZero() {
      this.change = "none";
      this.transform_cricle = 0;
    },
    turnRun() {
      if (this.change === "none") {
        this.change = "all";
      }
      this.num = Math.floor(Math.random() * 10) + 1;
      // if(this.num === ccc){
      //   this.num = 6
      // }else{
      //   this.num = ccc
      // }
      console.log(this.num);
      this.transform_cricle = 36 * this.num;
    },
    // 开始或者暂停倒计时
    happyClock() {
      let now = new Date();
      let happyTime = new Date();
      happyTime = happyTime.setHours(18, 0, 0, 0);
      now = now.getTime();
      this.expire = (happyTime - now) / 1000;
      if (this.expire <= 0) return;
      if (this.start) {
        this.start = false;
        this.countDown(this.expire);
        this.timer = setInterval(() => {
          if (this.expire) {
            this.expire--;
            this.countDown(this.expire);
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        this.start = true;
        clearInterval(this.timer);
      }
    },
    //倒计时
    countDown(time) {
      // time--;
      this.hours =
        Math.floor(time / (60 * 60)) < 10
          ? "0" + Math.floor(time / (60 * 60))
          : Math.floor(time / (60 * 60));
      this.minutes =
        Math.floor((time / 60) % 60) < 10
          ? "0" + Math.floor((time / 60) % 60)
          : Math.floor((time / 60) % 60);
      this.seconds =
        Math.floor(time % 60) < 10
          ? "0" + Math.floor(time % 60)
          : Math.floor(time % 60);
      // console.log(this.hours, this.minutes, this.seconds);
    },
    onClickLeft() {
      console.log(this.$route);
      this.$router.go(-1);
      this.$toast("返回");
    },
    onClickRight() {
      this.$store.commit("increment");
      this.$router.push('/around')
      console.log(this.$store.state.count);
      this.$toast("按钮");
    },
  },
  mounted() {
    for (let i = 0; i < 15; i++) {
      let j = {
        title: "无缝滚动第几条啊啊啊-" + i,
        time: "2020-04-10",
      };
      this.listData.push(j);
    }
    //h5拖拽事件
    //防抖：不管事件执行多少次，让事件只触发最后一次
    const fitPao = document.getElementById("dragImg");
    fitPao.ondragstart = function () {
      console.log(111);
    };
    //在拖动元素移动时，ondrag事件会一直触发，此处防抖
    let timer;
    fitPao.ondrag = function () {
      clearInterval(timer);
      timer = setTimeout(() => {
        console.log(222);
      }, 1000);
    };
    fitPao.ondragend = function () {
      console.log(333);
    };
    const fitBox = document.querySelector("#fitBox");
    fitBox.ondragenter = function () {
      console.log(444); //鼠标进入后触发
    };
    fitBox.ondragleave = function () {
      console.log(555); //鼠标离开触发
    };
    //节流，ondragover
    let sign = true;
    fitBox.ondragover = (e) => {
      e.preventDefault();
      if (!sign) {
        return;
      } else {
        sign = false;
        setTimeout(() => {
          console.log(666);
          sign = true;
        }, 1000);
      }
    };
    //防抖，ondragover
    // let timer1;
    // fitBox.ondragover = (e) => {
    //   e.preventDefault();
    //   // e.stopPropagation();
    //   // return false;
    //   clearTimeout(timer1);
    //   timer1 = setTimeout(() => {
    //     console.log(666);
    //   }, 1000);
    // };
    fitBox.ondrop = () => {
      console.log(777);
      this.$router.push({ name: "snake" });
      fitBox.style.backgroundColor = "orange";
      return false;
    };
  },
  created() {
    //回调函数
    let decune = function () {
      console.log("同步回调");
    };
    let prs = function () {
      console.log("同步");
      return decune();
    };
    prs();
    console.log(2);
  },
};
</script>

<style>
#dragImg {
  position: absolute;
  width: 50px;
  height: 80px;
}
.jump {
  width: 120px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: orange;
}
.page-example3 {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  overflow: hidden;
  border: 1px solid #283dff;
}
.ul-scoll li {
  margin: 6px;
  padding: 5px;
  background: rgba(198, 142, 226, 0.4);
}
.countDown {
  margin: 50px auto;
  width: 120px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
}
.countDown span {
  color: aliceblue;
  background-color: #749;
}
@media (min-width: 799px) {
  .countDown {
    width: 200px !important;
  }
}
</style>