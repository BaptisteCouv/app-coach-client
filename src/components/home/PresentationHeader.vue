<template>
  <div class="presentation-header d-flex align-end">
    <div class="test"></div>
    <div class="text-center">
      <div class="title-up">Bienvenue sur</div>
      <div class="title">Mon Coach'ez Moi</div>
      <div class="title-desc">Votre coach personnel</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
// $color-primary: #2388ed;

.title-up {
  font-size: 35px;
  color: $color-primary;
  font-weight: 400;
  text-transform: uppercase;
}
.title {
  font-size: 45px;
  color: white;
  font-weight: 800;
}
.title-desc {
  font-size: 25px;
  color: white;
  font-weight: 400;
}
.presentation-header {
  height: 100vh;
  width: 100%;

  overflow: hidden;

  background-image: url("@/assets/img/home.jpg");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .test {
    width: 0;
    height: 0;
    border-bottom: 20vh solid white;
    border-right: 100vw solid transparent;
    position: relative;
  }
}
.text-center {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
}
</style>
