<template>
  <v-container fluid class="container-presentation-text">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="6">
        <div class="container-text-detail d-flex justify-center flex-column">
          <div class="title text-h4 mb-2">CEDRIC COAUVOUX</div>
          <div class="desc text-body-1">{{ textDetail }}</div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="container-picture-detail">
          <v-img
            :width="400"
            cover
            src="@/assets/img/coach-profil.png"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      textDetail: `Bonjour je m’appelle Cédric et je suis coach sportif sur le bassin
      clermontois. Je suis entièrement à votre disposition pour toutes questions
      de votre part. N’hésitez pas à me contacter.`,
    };
  },
};
</script>
<style lang="scss" scoped>
$color-primary: #2388ed;

.container-picture-detail {
  height: 400px;
}
.container-presentation-text {
  background-color: white;
}
.container-text-detail {
  height: 100%;
  .title {
    font-weight: 500 !important;
    letter-spacing: 5px !important;
    color:  #2d2d2d;
  }
  .desc {
    color:  #2d2d2d;
  }
}

</style>
