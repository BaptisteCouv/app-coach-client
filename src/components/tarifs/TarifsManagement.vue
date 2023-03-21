<template>
  <v-container>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" sm="12" md="9" lg="7" xl="5">
        <v-card>
          <v-card-item>
            <div class="d-flex flex-column">
              <div class="text-uppercase text-subtitle-1 text-center">
                SANS crédit d’impots
                <span class="text-h5"> {{ price }} €</span> / la séance
              </div>
              <v-divider class="my-2"></v-divider>
              <div
                class="text-uppercase text-center text-h6 font-weight-bold text-primary"
              >
                Avec crédit d'impots 50% de remise
              </div>
              <div class="price text-center text-center text-primary">
                {{ priceReduc }} €
              </div>
              <div
                class="text-uppercase text-center text-h6 font-weight-bold text-primary"
              >
                / La séance
              </div>
            </div>
            <v-tabs v-model="tab" color="primary" align-tabs="center">
              <v-tab
                v-for="(contrat, i) in typeContrats"
                :key="i"
                :value="i"
                @click="resetChangeMode()"
                >{{ contrat.title }}</v-tab
              >
            </v-tabs>
            <v-window v-model="tab" class="pa-12">
              <v-window-item
                v-for="(contrat, i) in typeContrats"
                :key="i"
                :value="i"
              >
                <div class="d-flex justify-center">
                  <v-btn-toggle
                    variant="outlined"
                    class="w-100 d-flex justify-center"
                    v-model="toggleMouth"
                  >
                    <v-btn
                      v-for="(item, i) in contrat.children"
                      :key="i"
                      class="w-50"
                      @click="setDisplayMode(item.id)"
                      >{{ item.title }}
                    </v-btn>
                  </v-btn-toggle>
                </div>
                <div
                  class="d-flex justify-center"
                  v-for="(item, i) in contrat.children"
                  :key="i"
                >
                  <Transition
                    name="custom-classes"
                    enter-active-class="animate__animated animate__zoomIn"
                  >
                    <div v-if="item.isActive" class="w-100">
                      <div class="text-center text-body-2 mt-5">
                        {{ item.desc }}
                      </div>
                      <div class="text-center text-button mt-10">
                        {{ item.subtitle }} :
                      </div>
                      <v-btn-toggle
                        class="d-flex mt-4 d-flex justify-center"
                        variant="outlined"
                        v-model="toggleSeance"
                      >
                        <v-btn
                          v-for="(child, ii) in item.children"
                          :key="ii"
                          :style="{ width: 100 / item.children.length + '%' }"
                          @click="
                            getTotalPrice(item.id, child.id)
                          "
                          >{{ child.title }}</v-btn
                        >
                      </v-btn-toggle>
                      <div v-for="(child, ii) in item.children" :key="ii">
                        <Transition
                          name="custom-classes"
                          enter-active-class="animate__animated animate__fadeIn"
                        >
                          <div v-if="child.isActive" class="text-body-2 mt-5">
                            <div
                              v-for="(desc, iii) in child.detailDesc"
                              :key="iii"
                              class="d-flex justify-space-between text-body-2 mt-1"
                            >
                              {{ desc }}
                              <v-icon color="green">mdi-check</v-icon>
                            </div>
                          </div>
                        </Transition>
                      </div>
                    </div>
                  </Transition>
                </div>
              </v-window-item>
            </v-window>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      price: 0,
      priceReduc: 0,
      tab: null,
      toggleMouth: -1,
      toggleSeance: -1,
      typeContrats: [
        {
          title: "Avec Engagement",
          isActive: false,
          desc: "Avec Engagement -- desc",
          value: 1,
          id: "1",
          children: [
            {
              title: "12 mois",
              isActive: false,
              desc: "*Nombre de séance par semaine illimité. Réalisez au minimum 1 séance par semaine pour atteindre votre objectif plus rapidement.",
              subtitle: "Séance ",
              id: "1.1",
              children: [
                {
                  title: "Personnalisé",
                  promoPrice: 34,
                  initialPrice: 68,
                  isActive: false,
                  id: "1.1.1",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
                {
                  title: "Duo",
                  promoPrice: 27,
                  initialPrice: 54,
                  isActive: false,
                  id: "1.1.2",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
                {
                  title: "Trio",
                  promoPrice: 19,
                  initialPrice: 38,
                  isActive: false,
                  id: "1.1.3",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
              ],
            },
            {
              title: "6 mois",
              isActive: false,
              desc: "*Nombre de séance par semaine illimité. Réalisez au minimum 1 séance par semaine pour atteindre votre objectif plus rapidement.",
              subtitle: "Séance",
              id: "1.2",
              children: [
                {
                  title: "Personnalisé",
                  promoPrice: 40,
                  initialPrice: 80,
                  isActive: false,
                  id: "1.2.1",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
                {
                  title: "Duo",
                  promoPrice: 33,
                  initialPrice: 66,
                  isActive: false,
                  id: "1.2.2",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
                {
                  title: "Trio",
                  promoPrice: 25,
                  initialPrice: 50,
                  isActive: false,
                  id: "1.2.3",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Sans Engagement",
          isActive: false,
          desc: "Sans Engagement -- desc",
          value: 1,
          id: "2",
          children: [
            {
              title: "Séance",
              isActive: false,
              desc: "*Nombre de séance par semaine illimité. Réalisez au minimum 1 séance par semaine pour atteindre votre objectif plus rapidement.",
              subtitle: "Séance ",
              id: "2.1",
              children: [
                {
                  title: "20 Séances",
                  promoPrice: 45,
                  initialPrice: 90,
                  isActive: false,
                  id: "2.1.1",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
                {
                  title: "10 Séances",
                  promoPrice: 48,
                  initialPrice: 96,
                  isActive: false,
                  id: "2.1.2",
                  detailDesc: [
                    "Suivis personnalisé ",
                    "Test corporel",
                    "Analyse et réequilibrage musculo-squelettique",
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    resetChangeMode() {
      this.typeContrats.forEach((element) => {
        element.children.forEach((child) => {
          child.isActive = false;
          child.children.forEach((item) => (item.isActive = false));
          this.toggleSeance = -1;
          this.toggleMouth = -1;
          this.animateValue(0, 0);
        });
      });
    },
    animateValue(priceNet: number, priceReduc: number) {
      let startTimestamp: any = null;
      const step = (timestamp: any) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 800, 1);
        this.price = Math.floor(
          progress * (priceNet - this.price) + this.price
        );
        this.priceReduc = Math.floor(
          progress * (priceReduc - this.price) + this.price
        );
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },

    setDisplayMode(parentId: string) {
      const typeContrats = this.typeContrats;
      const toggleSeance = this.toggleSeance;

      typeContrats.forEach((element) => {
        const children = element.children;

        children.forEach((child) => {
          if (child.id !== parentId) {
            const childItems = child.children;
            childItems.forEach((item) => (item.isActive = false));
            child.isActive = false;
            return;
          }

          if (child.isActive) {
            this.animateValue(0, 0);
            const childItems = child.children;
            childItems.forEach((item) => (item.isActive = false));
            child.isActive = false;
          } else {
            if (toggleSeance >= 0) {
              const mode = child.children[toggleSeance];
              mode.isActive = true;
              this.animateValue(mode.promoPrice, mode.initialPrice);
            }
            child.isActive = true;
          }
        });
      });
    },
    getTotalPrice(parentId: string, childId: string) {
      let isFound = false;
      for (const parent of this.typeContrats) {
        const isParent = parent.children.find((child) => child.id === parentId);
        if (isParent) {
          for (const child of isParent.children) {
            if (child.id === childId) {
              this.animateValue(
                child.isActive ? 0 : child.promoPrice,
                child.initialPrice
              );
              child.isActive = !child.isActive;
              isFound = true;
              break;
            }
            child.isActive = false;
          }
        }
        if (isFound) {
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  margin: -25px 0;
  font-size: 100px;
  font-weight: 700;
}

.v-footer {
  display: none;
}
</style>
