<template>
  <v-container fluid class="container-presentation-square pa-0">
    <v-row>
      <v-col cols="3" v-for="(card, i) in cards" :key="i" class="pa-0">
        <v-card
          class="d-flex flex-column align-center rounded-0 pa-6"
          :style="'color: ' + card.fonColor"
          :color="card.color"
          elevation="0"
        >
          <template v-slot:title>
            <div class="d-flex flex-column align-center">
              <v-icon class="icon">{{ card.icon }}</v-icon>
              <h4 class="text-uppercase">{{ card.title }}</h4>
            </div>
          </template>
          <template v-slot:text>
            <div class="desc text-subtitle-1 text-center">
              {{ card.description }}
            </div>
          </template>
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
          icon: "mdi-numeric-1",
          title: "Bilan général",
          description:
            "Un bilan général sera mis en place dés votre prise en charge par votre coach. Grâce à une série de question votre coach pourra apprendre à mieux vous connaitre et à vous aider pour déterminer votre objectif. Ce questionnaire a pour but de ne rien laisser au hazard.",
          color: "#4e9ff0",
          fonColor: "#fff",
        },
        {
          icon: "mdi-numeric-2",
          title: "Votre quotidien",
          description:
            "Votre coach personnalisera un plan d'entraînement et de mode de vie en prenant en compte tous les aspects de votre vie quotidienne. Il vous soutiendra pour vous aider à rester motivé et à surmonter les obstacles. Avec son aide, vous améliorerez votre qualité de vie et atteindrez vos objectifs plus rapidement.",
          color: "#2388ed",
          fonColor: "#fff",
        },
        {
          icon: "mdi-numeric-3",
          title: "Votre passé",
          description:
            "Il est capital de connaitre ses capacités, pour réussir et ne pas se décourager. Votre coach sera là pour évaluer votre zone de confort et vous apprendre à l’optimiser. Laissez votre coach vous montrer à quel point il est facile de progresser et d’atteindre son objectif.",
          color: "#1c6cbd",
          fonColor: "#fff",
        },
        {
          icon: "mdi-numeric-4",
          title: "Vos déséquilibres physiques",
          description:
            "Aujourd’hui la sédentarité et le manque d'activité physique régulière ont un impact négatif sur notre santé, provoquant des troubles musculo-squelettiques et augmentant les risques d'accidents cardiovasculaires. Votre coach peut vous aider à adopter un mode de vie plus sain et à prévenir ces problèmes lors de séances personnalisées.",
          color: "#15518e",
          fonColor: "#fff",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$color-primary: #2388ed;

.icon {
  font-size: 10em;
}

.desc {
    height: 200px;
}

</style>
