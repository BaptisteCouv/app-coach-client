<template>
  <v-container>
    <v-row>
      <v-col clos="12">
        <v-timeline direction="horizontal" line-inset="12">
          <v-timeline-item dot-color="#f55" fill-dot>
            <template v-slot:opposite> Opposite </template>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite></template>
            oui
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite> Opposite </template>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite></template>
            OUi
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
