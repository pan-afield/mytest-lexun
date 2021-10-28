<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    // var ooo = 2;
    // console.log(ooo);
    // function pan() {
    //   ooo = ooo + 2;
    //   console.log(ooo); //2
    // }
    // function hui() {
    //   var ooo = 1;
    //   ooo = ooo * 5; // 10
    //   console.log(ooo);
    // }
    // var ooo;
    // console.log(ooo);
    // hui();
    // pan();

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
