<template>
  <div class="canvas">
    <h2 class="slot" @click="$router.push('/slot')">slot</h2>
    <canvas
      id="myCanvas"
      width="300"
      height="600"
      style="border: 1px solid #000000"
    ></canvas>
    <img @click="$router.go(-1)" id="pic" src="../assets/column.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bark: "",
    };
  },
  created() {},
  mounted() {
    let myCanvas = document.querySelector("#myCanvas");
    let myCanvas2d = myCanvas.getContext("2d");
    function drawHead(myCanvas2d) {
      myCanvas2d.beginPath();
      myCanvas2d.moveTo(-25, -50);
      myCanvas2d.lineTo(-10, -80);
      myCanvas2d.lineTo(-20, -80);
      myCanvas2d.lineTo(-5, -110);
      myCanvas2d.lineTo(-15, -110);
      myCanvas2d.lineTo(0, -140);
      myCanvas2d.lineTo(15, -110);
      myCanvas2d.lineTo(5, -110);
      myCanvas2d.lineTo(20, -80);
      myCanvas2d.lineTo(10, -80);
      myCanvas2d.lineTo(25, -50);
      myCanvas2d.closePath();
    }
    function drawTree(myCanvas2d) {
      //canvs变换阴影
      myCanvas2d.save();
      myCanvas2d.transform(1, 0, -0.5, 1, 0, 0);
      myCanvas2d.scale(1, 0.6);
      myCanvas2d.fillStyle = "rgba(0,0,0,0.2)";
      myCanvas2d.fillRect(-5, -50, 10, 50);
      drawHead(myCanvas2d);
      myCanvas2d.fill();
      myCanvas2d.restore();
      //矩形
      // myCanvas2d.fillStyle = "#ff0000";
      // myCanvas2d.fillRect(0, 0, 150, 75);
      //线条
      // myCanvas2d.moveTo(0, 0);
      // myCanvas2d.lineTo(200,100)
      // myCanvas2d.stroke()
      //变换
      // myCanvas2d.save();
      // myCanvas2d.translate(20, 20);
      // myCanvas2d.beginPath();
      // myCanvas2d.moveTo(0, 0);
      // myCanvas2d.lineTo(200, 100);
      // myCanvas2d.stroke();
      // myCanvas2d.restore();//让canvans后续的操作不受刚刚变换的影响
      //路径
      // myCanvas2d.save();
      // myCanvas2d.translate(130, 250);
      myCanvas2d.beginPath();
      myCanvas2d.moveTo(-25, -50);
      myCanvas2d.lineTo(-10, -80);
      myCanvas2d.lineTo(-20, -80);
      myCanvas2d.lineTo(-5, -110);
      myCanvas2d.lineTo(-15, -110);
      myCanvas2d.lineTo(0, -140);
      myCanvas2d.lineTo(15, -110);
      myCanvas2d.lineTo(5, -110);
      myCanvas2d.lineTo(20, -80);
      myCanvas2d.lineTo(10, -80);
      myCanvas2d.lineTo(25, -50);
      myCanvas2d.closePath();
      //线条样式
      myCanvas2d.lineWidth = 4;
      myCanvas2d.lineJoin = "round";
      myCanvas2d.strokeStyle = "green";
      //填充闭合路径内部的像素点
      myCanvas2d.fillStyle = "#339900";
      myCanvas2d.fill();
      //绘制树干
      // myCanvas2d.fillStyle = "#663300";
      // myCanvas2d.fillRect(-5, -50, 10, 50);
      // //用图片填充树干
      // this.bark = new Image();
      // this.bark.src = require("../assets/column.png");
      // myCanvas2d.drawImage(this.bark, -5, -50, 10, 50);
      //树干渐变纹理
      var trunkGradient = myCanvas2d.createLinearGradient(-5, -50, 5, -50);
      trunkGradient.addColorStop(0, "#663300");
      trunkGradient.addColorStop(0.4, "#996600");
      trunkGradient.addColorStop(1, "#552200");
      myCanvas2d.fillStyle = trunkGradient;
      myCanvas2d.fillRect(-5, -50, 10, 50);
      //树干渐变投影
      let canopyShadow = myCanvas2d.createLinearGradient(0, -50, 0, 0);
      canopyShadow.addColorStop(0, "rgba(0,0,0,0.5)");
      canopyShadow.addColorStop(0.2, "rgba(0,0,0,0)");
      myCanvas2d.fillStyle = canopyShadow;
      myCanvas2d.fillRect(-5, -50, 10, 50);
      myCanvas2d.stroke();
      // myCanvas2d.restore();
    }
    //在130，250的位置绘制第一棵树
    myCanvas2d.save();
    myCanvas2d.translate(130, 250);
    drawTree(myCanvas2d);
    myCanvas2d.restore();
    //在260，500的位置绘制第二棵树
    myCanvas2d.save();
    myCanvas2d.translate(260, 500);
    //将第二棵树的宽和高分别放大至原来的2倍
    myCanvas2d.scale(2, 2);
    drawTree(myCanvas2d);
    myCanvas2d.restore();
    //曲线绘制
    myCanvas2d.save();
    myCanvas2d.translate(-10, 350);
    myCanvas2d.beginPath();
    myCanvas2d.moveTo(0, 0);
    myCanvas2d.quadraticCurveTo(170, -50, 260, -190);
    myCanvas2d.quadraticCurveTo(310, -250, 410, -250);
    myCanvas2d.lineWidth = 20;
    // myCanvas2d.strokeStyle = "#663300";
    //图片填充
    let grevel = new Image();
    grevel.src = require("../assets/column.png");
    myCanvas2d.strokeStyle = myCanvas2d.createPattern(grevel, "repeat");
    myCanvas2d.stroke();
    myCanvas2d.restore();
  },
};
</script>

<style>
</style>