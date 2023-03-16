<template>
  <div v-if="positionX === 'right'" :style="'border-'+ positionY +': 20vh solid '+ color" class="diagonal-style right"></div>
  <div v-else :style="'border-'+ positionY +': 20vh solid '+ color" class="diagonal-style left"></div>
</template>

<script lang="ts">
export default {
  props: {
    positionX: String,
    positionY: String,
    color: String,
  },
};
</script>
<style lang="scss" scoped>
.diagonal-style {
  width: 0;
  height: 0;
  // border-bottom: 20vh solid white;
  position: relative;
  &.right {
    border-left: 100vw solid transparent;
  }
  &.left {
    border-right: 100vw solid transparent;
  }
}
</style>
