<template>
  <v-container>
    <v-row  class="d-flex align-center">
      <h1>MES TARIFS</h1>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(card, i) in cards" cols="12" sm="8" md="4" xl="3" :key="i">
        <v-card elevation="2">
          <v-img
            height="100"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
            cover
            class="text-white"
          >
          </v-img>
          <v-card-text>
            <div class="title text-h6 text-uppercase text-center">{{ card.title }}</div>
            <div class="desc">
                {{ card.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      cards: [
        {
          icon: "mdi-account-tie",
          title: "Engagements 12 mois",
          description:
            "Mon coach’ez moi apporte le professionnalisme à la porte de chez vous",
        },
        {
          icon: "mdi-weight-lifter",
          title: "Engagements 6 mois",
          description:
            "Des séances adaptées à vos besoins, à votre personnalité et à vos capacités",
        },
        {
          icon: "mdi-cellphone-message",
          title: "Sans Engagements",
          description:
            "Une approche de proximité et quotidienne pour rester motivé",
        },
      ],
    };
  },
};
</script>
