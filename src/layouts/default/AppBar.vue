<template>
  <v-app-bar :elevation="1" flat>
    <v-app-bar-title>$t('app.layout.titleApp')</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
