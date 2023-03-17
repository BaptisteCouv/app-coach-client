<template>
  <v-container fluid class="container-presentation-square pa-0">
    <v-row>
      <v-col
        :cols="card.colDivision"
        v-for="(card, i) in cards"
        :key="i"
        class="pa-0"
      >
        <v-card
          class="d-flex flex-column align-center rounded-0 pa-0"
          :style="'color: ' + card.fonColor"
          :color="card.color"
          elevation="0"
        >
          <template v-if="card.icon || card.title" v-slot:title>
            <div class="d-flex flex-column align-center">
              <v-icon v-if="card.icon" class="icon">{{ card.icon }}</v-icon>
              <h4 v-if="card.title" class="text-uppercase">{{ card.title }}</h4>
            </div>
          </template>
          <template v-if="card.description" v-slot:text>
            <div class="desc text-subtitle-1 d-flex align-center text-justify pa-12" :class="card.textCentered">
              {{ card.description }}
            </div>
          </template>
          <div v-if="card.img" class="img">
            <v-img cover :src="`src/assets/img/coach/${card.img}`"></v-img>
          </div>
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
          title: "",
          icon: "",
          color: "",
          fonColor: "",
          colDivision: 7,
          img: "COMPETITION_HALTERO-32-min.jpg",
        },
        {
          title: "",
          icon: "",
          description:
            "Quand on se lance pour atteindre un nouvel objectif, il est important d’être bien accompagné et de se sentir en confiance. C’est pourquoi votre coach fera tout son possible pour que chaque séance se déroule dans la joie et la bonne humeur et que votre motivation reste boostée à 100%.",
          color: "#f1f3f7",
          fonColor: "#707070",
          colDivision: 5,
          textCentered: "text-justify",
        },
        {
          title: "",
          icon: "",
          description:
            "Je m’appelle Cédric Couavoux et je suis coach sportif depuis maintenant plusieurs années. Ce métier était pour moi une vocation étant un passionné de sport, étant à l’écoute des autres et aimant former et conseiller mes clients. D’après mon expérience personnelle, je sais à quel point il est difficile de rester motivé pour atteindre son objectif seul. C’est pourquoi je serai là pour vous accompagnez et réaliser des séances sur-mesure. Je vous assure que votre objectif deviendra notre objectif.",
          color: "#f1f3f7",
          fonColor: "#707070",
          colDivision: 5,
          textCentered: "text-justify",
        },
        {
          title: "",
          icon: "",
          color: "",
          fonColor: "",
          colDivision: 7,
          img: "COMPETITION_HALTERO-21-min.jpg",
        },
        {
          title: "",
          icon: "",
          color: "",
          fonColor: "",
          colDivision: 7,
          img: "COMPETITION_HALTERO-93-min.jpg",
        },
        {
          title: "",
          icon: "",
          description:
            "Je suis titulaire de plusieurs diplômes qui me permettent d’exercer ce métier et de vous conseiller au mieux. En effet, j’ai commencé par étudier le Sport à l’Université (STAPS) et j’ai passé la formation Coach Haltérophilie. Je suis également titulaire du Brevet professionnel de la jeunesse, de l'éducation populaire et du sport Activité de la forme option Musculation Haltérophilie. Enfin, j’ai obtenu le Brevet fédéral d’haltérophilie.",
          color: "#f1f3f7",
          fonColor: "#707070",
          colDivision: 5,
          textCentered: "text-justify",
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
  height: 500px;
  animation: apparition 1s ease;
}
.img {
  height: 532px;
  width: 100%;
}

@keyframes apparition {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
