<template>
  <div class="container-presentation-card d-flex flex-column align-center mb-16">
    <h3>BONJOUR</h3>
    <h1 class="mt-2 mb-8">POURQUOI FAIRE APPEL À MON COACH’EZ MOI ?</h1>
    <div class="container-presentation-card--cards d-flex">
      <v-card
        class="d-flex flex-column align-center ma-4"
        elevation="0"
        min-width="200"
        max-width="320"
        v-for="card, i in cards"
        :key="i"
      >
        <template v-slot:title>
          <div class="d-flex flex-column align-center">
            <v-icon>{{ card.icon }}</v-icon>
            <h4 class="text-uppercase">{{ card.title }}</h4>
          </div>
        </template>
        <template v-slot:text>
          <div class="text-subtitle-1 text-center">
            {{ card.description }}
          </div>
        </template>
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
          icon: "mdi-weight-lifter",
          title: "personnalisé",
          description:
            "Des séances adaptées à vos besoins, à votre personnalité et à vos capacités",
        },
        {
          icon: "mdi-cellphone-message",
          title: "à l'écoute",
          description:
            "Une approche de proximité et quotidienne pour rester motivé",
        },
        {
          icon: "mdi-stairs-up",
          title: "suivis",
          description:
            "Plusieurs tests corporels vous seront proposés tout au long de votre coaching pour évaluer et visualiser votre avancement",
        },
      ],
    };
  },
};
</script>
