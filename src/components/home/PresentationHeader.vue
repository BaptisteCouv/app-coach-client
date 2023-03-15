<template>
  <div class="presentation-header d-flex align-end">
    <DiagonalStyle position="left" color="white"/>
    <div class="bloc-presentation-title text-center">
      <div class="title-up text-uppercase">Bienvenue sur</div>
      <div class="title text-uppercase">Mon Coach'ez Moi</div>
      <div class="title-desc text-uppercase">Votre coach personnel</div>
    </div>
  </div>
</template>

<script lang="ts">
import DiagonalStyle from '@/layouts/default/DiagonalStyle.vue';

export default { components: { DiagonalStyle } };
</script>
<style lang="scss" scoped>
$color-primary: #2388ed;

@media screen and (max-width: 600px) {
  .title-up {
    font-size: 15px !important;
  }
  .title {
    font-size: 20px !important;
    letter-spacing: 10px !important;;
  }
  .title-desc {
    font-size: 15px !important;
  }
}

.title-up {
  font-size: 35px;
  color: white;
  font-weight: 400;
  letter-spacing: 13px;
}
.title {
  font-size: 70px;
  color: white;
  font-weight: 700;
  letter-spacing: 13px;
}
.title-desc {
  font-size: 25px;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 13px;
}
.presentation-header {
  height: 100vh;
  width: 100%;

  overflow: hidden;

  background-image: url("@/assets/img/img-background-blue.png");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bloc-presentation-title {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
}
</style>
