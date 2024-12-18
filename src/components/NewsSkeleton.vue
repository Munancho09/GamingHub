<script setup>
import Skeleton from 'primevue/skeleton';

function getLineWidth () {
  const width = Math.floor(Math.random() * 500);
  return `${width}px`;
}
</script>

<template>
  <div class="news-skeleton">
    <Skeleton class="news-skeleton__skeleton" height="2rem" />
    <Skeleton class="news-skeleton__skeleton" height="300px" />
    <Skeleton v-for="i in 5" :key="i" class="news-skeleton__skeleton" :width="getLineWidth()" />
  </div>
</template>

<style>
.news-skeleton {
  max-height: 90vh;
  margin: 2rem 0;
  overflow: hidden;
}
.news-skeleton__skeleton {
  margin-bottom: 1rem;
}
</style>
