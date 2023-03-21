<template>
  <AppBar />
  <v-app v-if="isLoading">
    <router-view />
    <Footer v-if="$route.name !== 'tarif'" />
  </v-app>
  <div v-else class="loading d-flex justify-center align-center flex-column">
    <v-progress-circular
      indeterminate
      :size="150"
      color="white"
    ></v-progress-circular>
    <div class="text mt-6" color="white">Chargement ...</div>
  </div>
</template>

<script lang="ts">
import AppBar from "@/layouts/default/AppBar.vue";
import Footer from "@/layouts/default/Footer.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    AppBar,
    Footer,
  },
  beforeCreate() {},
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000);
  },
};
</script>
<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
  $color-primary: #2388ed;
}

.loading {
  height: 100vh;
  background-image: url("@/assets/img/img-background-blue.png");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text {
  color: white;
}
</style>
