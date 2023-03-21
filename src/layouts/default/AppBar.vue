<template>
  <v-layout>
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
        <v-btn @click="homeRouter()"> Accueil</v-btn>
        <v-btn @click="myCoachRouter()"> Mon coach</v-btn>
        <v-btn @click="tarifsRouter()"> Mes tarifs</v-btn>
        <v-btn @click="contactRouter()"> Me contacter</v-btn>
        <v-btn
          icon
          title="Instagram Mon Coach'ez Moi"
          @click="openInstagramLink()"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon title="connexion">
          <v-icon>mdi-account-outline</v-icon>
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
        <v-list-item @click="homeRouter()">
          <v-icon icon="mdi-home" class="mr-2"></v-icon> Accueil
        </v-list-item>
        <v-list-item @click="myCoachRouter()">
          <v-icon icon="mdi-weight-lifter" class="mr-2"></v-icon> Mon coach
        </v-list-item>
        <v-list-item @click="tarifsRouter()">
          <v-icon icon="mdi-currency-eur" class="mr-2"></v-icon> Mes tarifs
        </v-list-item>
        <v-list-item @click="contactRouter()">
          <v-icon icon="mdi-phone-message" class="mr-2"></v-icon> Me contacter
        </v-list-item>
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
    homeRouter() {
      this.$router.push("/");
    },
    myCoachRouter() {
      this.$router.push("/mon-coach");
    },
    tarifsRouter() {
      this.$router.push("/tarif");
    },
    contactRouter() {
      this.$router.push("/me-contacter");
    },
    openInstagramLink() {
      window.open("https://www.instagram.com/mon_coach_ez_moi/");
    },
  },
};
</script>
