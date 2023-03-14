<template>
  <div class="container-presentation-card d-flex flex-column align-center">
    <h3>BONJOUR</h3>
    <h1>POURQUOI FAIRE APPEL À MON COACH’EZ MOI ?</h1>
    <div class="container-presentation-card--cards d-flex ">
      <v-card
        class="d-flex flex-column align-center ma-2"
        min-width="200"
        max-width="350"
        v-for="card in cards"
        :key="card"
      >
        <template v-slot:title>
          <div class="d-flex flex-column align-center">
            <v-icon>{{ card.icon }}</v-icon>
            <h4 class="text-uppercase">{{ card.title }}</h4>
          </div>
        </template>
        <template v-slot:text> {{ card.description }} </template>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          icon: "mdi-account-tie",
          title: "professionnalisme",
          description:
            "Mon coach’ez moi apporte le professionnalisme à la porte de chez vous",
        },
        {
          icon: "mdi-account-tie",
          title: "personnalisé",
          description:
            "Des séances adaptées à vos besoins, à votre personnalité et à vos capacités",
        },
        {
          icon: "mdi-account-tie",
          title: "à l'écoute",
          description:
            "Une approche de proximité et quotidienne pour rester motivé",
        },
        {
          icon: "mdi-account-tie",
          title: "suivis",
          description:
            "Plusieurs tests corporels vous seront proposés tout au long de votre coaching pour évaluer et visualiser votre avancement",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-presentation-card {}

</style>
