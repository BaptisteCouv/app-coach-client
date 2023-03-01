<template>
  <AppBar></AppBar>
  <router-view />
</template>

<script lang="ts" setup>
import AppBar from "@/layouts/default/AppBar.vue";
</script>
<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
  $color-primary: #2388ed;
}
</style>
