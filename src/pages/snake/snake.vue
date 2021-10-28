<template>
  <div class="snake">
    <div id="box">
      <div id="snakeDiv"></div>
      <div class="bottom">
        <span id="score" class="span1">分数：0</span>
        <span id="time" class="span2">时间：0</span>
        <button onclick="start()" class="button1">开始</button>
        <button onclick="stop()" class="button2">结束</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            x:0,//x坐标
            y:0,//y坐标
            startX:0,//开始点x位置
            startY:0,//开始点y位置
        }
    },
    methods:{
        Line(ctx,o){

        }
    }
};
</script>

		<style>
* {
  margin: 0;
  padding: 0;
}
#box {
  width: 620px;
  height: 450px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 20px;
  right: 0;
  bottom: 0;
  background: gray;
  border-radius: 10px;
}
#snakeDiv {
  width: 600px;
  height: 400px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 10px;
  right: 0;
  bottom: 0;
}
.bottom {
  width: 600px;
  height: 30px;
  position: absolute;
  bottom: 1px;
  right: 1px;
}
.bottom .button1 {
  position: absolute;
  right: 90px;
  width: 50px;
  font-size: 14px;
}
.bottom .button2 {
  position: absolute;
  right: 30px;
  width: 50px;
  font-size: 14px;
}
.bottom .span1 {
  position: absolute;
  left: 10px;
  color: white;
}
.bottom .span2 {
  position: absolute;
  left: 200px;
  color: white;
}
</style>