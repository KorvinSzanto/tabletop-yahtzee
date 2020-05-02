<template functional>
  <div class='dice-face' :class="[props.number % 2 == 0 ? 'even' : 'odd']" :style='{
    width: props.width + "px",
    height: props.width + "px",
    fontSize: `${props.width * 3/5}px`
  }'
  v-text='props.number' />
</template>
<style scoped>
.dice-face {
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Dosis';
  font-weight: 900;
  letter-spacing: 0;
  text-shadow:0 0 20px rgba(0, 0, 0, .5);
}

.even {
  color: #3D9970
}
.odd {
    color: hsla(3, 100%, 25%, 1.0);
}

</style>
