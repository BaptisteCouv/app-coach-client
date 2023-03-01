<template>
  <v-layout class="layout-block">
    <v-app-bar elevate-on-scroll flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="openSideBar()"
          v-if="$vuetify.display.xs"
        ></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title
        title="Mon Coach'ez moi"
        :class="$vuetify.display.xs ? 'd-flex justify-center' : ''"
        >Mon Coach'ez Moi</v-app-bar-title
      >
      <template v-slot:append v-if="!$vuetify.display.xs">
        <v-btn> Accueil</v-btn>
        <v-btn> Mon coach</v-btn>
        <v-btn> Mes tarifs</v-btn>
        <v-btn> Me contacter</v-btn>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.display.xs"
      v-model="isDisplayPhone"
      location="left"
      temporary
    >
      <v-list lines="one">
        <v-list-item
          ><v-icon icon="mdi-home" class="mr-2"></v-icon> Accueil</v-list-item
        >
        <v-list-item
          ><v-icon icon="mdi-weight-lifter" class="mr-2"></v-icon> Mon
          coach</v-list-item
        >
        <v-list-item
          ><v-icon icon="mdi-currency-eur" class="mr-2"></v-icon> Mes
          tarifs</v-list-item
        >
        <v-list-item
          ><v-icon icon="mdi-phone-message" class="mr-2"></v-icon> Me
          contacter</v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script lang="ts">
export default {
  data() {
    return { isDisplayPhone: true };
  },
  methods: {
    openSideBar() {
      this.isDisplayPhone = !this.isDisplayPhone;
    },
  },
};
</script>
