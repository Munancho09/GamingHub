<script setup>
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';
</script>

<template>
  <div class="news-list-skeleton">
    <Card
      v-for="i in 20"
      class="news-list-skeleton__card"
    >
      <template #header>
        <Skeleton width="100%" height="10rem" />
      </template>
      <template #title>
        <Skeleton class="news-list-skeleton__title-row" height="16px" />
        <Skeleton class="news-list-skeleton__title-row" height="16px" />
        <Skeleton class="news-list-skeleton__title-row" height="16px" />
      </template>
      <template #subtitle>
        <Skeleton class="news-list-skeleton__subtitle-row" height="12px" />
        <Skeleton class="news-list-skeleton__subtitle-row" height="12px" />
      </template>
      <template #footer>
        <Skeleton height="40px" width="100px" />
      </template>
    </Card>
  </div>
</template>

<style>
.news-list-skeleton {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  max-height: 90vh;

  overflow: hidden;
}

.news-list-skeleton__card {
  width: 300px;
  height: 450px;
  overflow: hidden;
}

.news-list-skeleton__title-row {
  margin-bottom: 10px;
}

.news-list-skeleton__subtitle-row {
  margin-bottom: 5px;
}
</style>
