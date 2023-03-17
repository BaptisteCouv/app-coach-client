<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col cols="3">
          <div class="logo">
            <v-img width="100" src="@/assets/img/logo-mon-coach-ez-moi-white.png"></v-img>
          </div>
        </v-col>
        <v-col cols="9" class="d-flex align-center justify-space-between">
          <v-list
            class="list"
            lines="one"
            v-for="(details, i) in detailFooter"
            :key="i"
          >
            <v-list-item
              v-for="(item, i) in details"
              :key="i"
              :title="item.title"
              :subtitle="item.desc"
            >
            </v-list-item>
          </v-list>
          <div v-if="socialMedia.length > 0" class="social-media">
            <v-btn icon v-for="(item, i) in socialMedia" :key="i">
              <v-icon :color="item.colorItem">{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="text-caption font-weight-thin text-center mt-3">
        Mon Coach'ez Moi. © 2023. All Rights Reserved
      </div>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      logoName: "logo-mon-coach-ez-moi-white.png",
      detailFooter: {
        infos: [
          {
            id: "telephone_cedric_couavoux",
            title: "Téléphone",
            desc: "06 65 24 75 87",
          },
          {
            id: "mail_coach_personnel",
            title: "Email",
            desc: "moncoachezmoi63@gmail.com",
          },
          {
            id: "disponibilite_coach_personnel",
            title: "Disponibilité",
            desc: "Lun - Sam / 8:00 h - 21:00 h",
          },
        ],
      },
      socialMedia: [
        {
          id: "instagram_coach_personnel.png",
          title: "",
          desc: "",
          icon: "mdi-instagram",
          colorItem: "red",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.v-footer {
  background-color: #252a2c;
  color: white;
  max-height: 150px;
}

@media screen and (max-width: 600px) {
  .list {
    display: flex;
  }
}
.list {
  background-color: #252a2c;
  display: flex;
  color: white;
}
</style>
