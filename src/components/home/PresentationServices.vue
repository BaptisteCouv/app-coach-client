<template>
  <div class="container-presentation-space">
    <div class="container-presentation-text">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="4">
          <div
            class="container-promo-detail d-flex justify-center align-center"
          >
            {{ detailpromo }}
          </div>
        </v-col>
        <v-col cols="4">
          <div class="container-text-detail d-flex justify-center flex-column">
            <div class="title text-h4">{{ textDetail }}</div>
          </div>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      textDetail: `Mon coach’ez Moi est une auto-entreprise qui vous fait bénéficier d’un crédit d’impôt de 50% et du service Avance Immédiate`,
      detailpromo: "-50%",
    };
  },
};
</script>
<style lang="scss" scoped>
$color-primary: #2388ed;
.container-presentation-text {
  background-color: $color-primary;
  transform: rotate(-5deg);
  width: 130vw !important;
  left: -250px;
  position: absolute;
}
.container-presentation-space {
  height: 400px;
}
.container-promo-detail {
  font-weight: 600;
  height: 400px;
  font-size: 120px;
  color: white;
}
.container-text-detail {
  height: 100%;
  color: white;
  .title {
    font-weight: 300;
  }
  .desc {
  }
}
</style>
