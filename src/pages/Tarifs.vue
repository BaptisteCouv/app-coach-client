<template>
  <div class="zone-tarifs">
    <MarginHeaderApp />
    <TarifsManagement />
  </div>
</template>

<script lang="ts" setup>
import TarifsManagement from "@/components/tarifs/TarifsManagement.vue";
import MarginHeaderApp from "@/layouts/default/MarginHeaderApp.vue";
</script>

<style lang="scss" scoped>
.zone-tarifs {
  background-image: url("@/assets/img/tarifs.png");
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: inherit;
}
</style>
