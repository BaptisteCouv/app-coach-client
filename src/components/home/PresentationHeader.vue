<template>
  <div class="presentation-header d-flex align-end">
    <DiagonalStyle positionX="left" positionY="bottom" color="white" />

    <div class="bloc-presentation-title text-center">
      <div class="title-up text-uppercase">Bienvenue sur</div>
      <div class="title text-uppercase">Mon Coach'ez Moi</div>
      <section class="animation">
        <div class="title-desc text-uppercase first"><div>Votre coach personnel</div></div>
        <div class="title-desc text-uppercase second"><div>Entraîneur personnel certifié</div></div>
        <div class="title-desc text-uppercase third"><div>Conseil en développement sportif</div></div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import DiagonalStyle from "@/layouts/default/DiagonalStyle.vue";

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
    letter-spacing: 10px !important;
  }
  .title-desc {
    font-size: 15px !important;
  }
}

.title-up {
  font-size: 45px;
  color: white;
  font-weight: 400;
  letter-spacing: 13px;
}
.title {
  font-size: 95px;
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
  position: inherit;
}
.bloc-presentation-title {
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
}

.animation {
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 15s infinite;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

</style>
