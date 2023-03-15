<template>
  <PresentationHeader></PresentationHeader>
  <PresentationCard></PresentationCard>
  <DiagonalStyle position="right" color="#2388ed"/>
  <PrentationTextDetail></PrentationTextDetail>
</template>

<script lang="ts" setup>
import PresentationHeader from "@/components/home/PresentationHeader.vue";
import PresentationCard from "@/components/home/PresentationCard.vue";
import PrentationTextDetail from "@/components/home/PrentationTextDetail.vue";
import DiagonalStyle from '@/layouts/default/DiagonalStyle.vue';
</script>

<style lang="scss" scoped></style>
