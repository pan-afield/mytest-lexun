<template>
  <div class="cars">
      <ul>
          <li @click="$event.target.style.backgroundColor = 'pink'">bens <span style="background:orange">132</span></li>
          <li>bmw</li>
          <li>toyota</li>
          <li>honda</li>
      </ul>
  </div>
</template>

<script>
export default {
methods:{
    kkk(event){
        event.target.style.backgroundColor = 'pink'
    }
}
}
</script>

<style lang='scss' scoped>
li {
  width: 20px;
  height: 40px;
  background-color: skyblue;
}
</style>