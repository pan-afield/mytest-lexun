<template>
  <div class="test">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="canvas"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <h2 @click="showTips" class="oopp">myv</h2>
    <h2 class="e-china" @click="$router.push('china')">echarts.china</h2>
    <van-field v-model="English" type="digit" label="English" class="asd" />
    <van-field v-model="math" type="digit" label="Math" />
    <van-field v-model="History" type="digit" label="History" />
    <div>{{ gooo }}</div>
    <van-button @click="changeC" type="primary">计算结果</van-button>
    <div id="bubo" :class="alass" @click="$router.push('/echarts')">
      echarts
    </div>
    <span @click="fadeShow = !fadeShow">{{ title }}</span>
    <div class="total">总分：{{ totalMarks }}</div>
    <transition name="playShow">
      <ul v-if="fadeShow">
        <li v-for="(item, index) in results" :key="index">
          {{ item.name }}:{{ item.score }}
        </li>
      </ul>
    </transition>
    <van-icon @click="$router.push('marquee')" name="chat-o" dot size="3rem" />
    <div class="mask" v-if="mask" @click="closeAll"></div>
    <transition name="tipShow">
      <div v-if="showTip" class="tips"></div>
    </transition>
    <div class="home">
      <div class="home-xi" @click="gosomewhere()">哈哈哈</div>
    </div>
    <a href="#bubo">555</a>
    <div class="nick" style="height: 500px; width: 100px; background: #749">
      peter
    </div>
    <input class="asd" type="text" v-focus /><br />
    <form action="" @submit.prevent="submitForm()">
      <input
        type="checkbox"
        name="food"
        value="orange"
        id="orange"
        v-model="checkedArr"
      /><label for="orange">orange</label><br />
      <input
        type="checkbox"
        name="food"
        value="apple"
        id="apple"
        v-model="checkedArr"
      /><label for="apple">apple</label><br />
      <input type="submit" value="提交" />
    </form>
    <h3>{{ checkedArr }}</h3>
    <div id="qrcode"></div>
    <ul>
      <li v-for="(item, index) in arrList" :key="index">
        {{ item | strFilter }}
      </li>
      <li>{{ arrList | numberFilter }}</li>
    </ul>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  filters: {
    numberFilter: function (value) {
      if (!value) return "";
      return value.toString() + "i";
    },
  },
  computed: {
    alass() {
      // console.log(this);
      return "style1";
    },
    totalMarks() {
      let total = 0;
      for (let i = 0; i < this.results.length; i++) {
        total += parseInt(this.results[i].score);
      }
      return total;
    },
    gooo() {
      let total = "";
      if (this.English !== "" && this.math !== "" && this.History !== "") {
        total =
          parseInt(this.English) + parseInt(this.math) + parseInt(this.History);
      }
      return total;
    },
  },
  data() {
    return {
      mask: false,
      showTip: false,
      fadeShow: true,
      English: "",
      math: "",
      History: "",
      title: "我是一个计算器",
      results: [
        { name: "English", score: 80 },
        { name: "Math", score: 90 },
        { name: "History", score: 70 },
      ],
      arrList: [1, 2, 3, 4, 5],
      checkedArr: ["apple"],
    };
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 132,
        height: 132,
        text: "https://www.baidu.com", // 二维码地址
        colorDark: "#000",
        colorLight: "#fff",
      });
    },
    submitForm() {
      console.log(555);
    },
    gosomewhere() {
      window.location.href =
        "http://app.lexun.com/wawa/home/index.html#/virtualRoom";
    },
    closeAll() {
      this.mask = false;
      this.showTip = false;
    },
    showTips() {
      this.mask = true;
      this.showTip = true;
    },
    changeC() {
      // this.alass = "style2";
      this.results[0].score = 100;
    },
    onClickLeft() {
      console.log();
      this.$router.push({
        name: "test",
        params: {
          id: 996,
          color: "red",
        },
      });
      this.$toast("返回");
    },
    onClickRight() {
      this.$router.push("/canvas");
      this.$toast("按钮");
    },
  },
  created() {
    console.log(this.arrList);
    let ab = this.arrList.filter((item, index) => {
      return item > 3;
    });
    console.log(ab);
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 5];
    let a3 = [...a1, ...a2];
    console.log([...new Set(a3)]);
    console.log(process.env);
    // let timeNum = 100;
    // const timeLock = setInterval(() => {
    //   if (timeNum === 0) clearInterval(timeLock);
    // console.log(timeNum);
    //   timeNum--;
    //   let a = Math.floor(Math.random()*100);
    //   console.log(a);
    // }, 1000);
    // console.log(a);
    // var a = 1;
    // pan();
    // function pan() {
    //   console.log("fun");
    // }
    // window.oncontextmenu = () => {
    //   console.log("点击了右键");
    // };
    // var obj1 = {
    //   a: 123,
    // };
    // var obj2 = {
    //   b: 456,
    // };
    // obj1.c = obj2;
    // obj2.c = obj1;
    // const jsonstr = JSON.stringify(obj1);
    // console.log(jsonstr);
    // console.log(alass);
  },
  mounted() {
    this.qrcode();
  },
};
</script>

<style lang='scss' scoped>
#bubo {
  width: 200px;
  height: 200px;
  background: #000;
}
.style1 {
  background: skyblue !important;
}
.style2 {
  background: yellowgreen;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 888;
}
.oopp {
  position: sticky;
  top: 20px;
  z-index: 100;
}
.tips {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.asd {
  &:focus {
    background-color: seagreen !important;
  }
}

.home {
  width: 100px;
  height: 100px;
  background-color: orange;
  &-xi {
    color: red;
  }
  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
    transition: all 0.8s;
  }
  /*   &:focus {
    background: seagreen;
  } */
  /*   &:active {
    filter: brightness(0.5);
    cursor: crosshair;
    transition: all 0.8s;
  } */
}
.playShow-enter-active,
.playShow-leave-active {
  transition: all 0.5s;
}
.playShow-enter,
.playShow-leave-to {
  transform: translate(-50%, -70%);
  opacity: 0;
}
.tipShow-enter-active,
.tipShow-leave-active {
  transition: all 0.5s;
}
.tipShow-enter,
.tipShow-leave-to {
  transform: translate(-50%, -100%) !important;
  opacity: 0;
}
</style>