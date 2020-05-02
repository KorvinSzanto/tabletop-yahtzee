<template>
  <div class='template flex flex-col'>
    <div class='empty-row h-1/3'>
      <div style='height: 500px'>&nbsp;</div>
    </div>
    <div class='flex top-row h-100'>
      <face :number=2 :width=500 />
      <face :number=4 :width=500 />
      <face :number=5 :width=500 /></div>
    <div class='flex bottom-row h-100'>
      <face :number=6 :width=500 />
      <div><face :number=3 :width=500 /></div>
      <face :number=1 :width=500 />
    </div>
  </div>
</template>
<script>
import Face from './Face'

export default {
  components: {
    Face
  }
}
</script>
<style lang='scss' scoped>
.template {
  background: white url('/food.png');
  background-size: 1000px;
}
.bottom-row {
  transform: scale(-1,-1);

  >div {
    transform: scale(-1, -1);
  }
}
</style>
