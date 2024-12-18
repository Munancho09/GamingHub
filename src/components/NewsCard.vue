<script setup>
import { defineProps, computed } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

const props = defineProps({
  id: [String, Number],
  title: String,
  subtitle: String,
  content: String,
  preview: String,
  article_url: String,
});

const newsId = computed(() => {
  return `news-${props.id}`;
})
</script>

<template>
  <Card class="news-card" :id="newsId">
    <template #header>
      <img class="news-card__image" :alt="props.title" :src="props.preview" />
    </template>
    <template #title>
      <span class="news-card__title">
        {{ props.title }}
      </span>
    </template>
    <template #subtitle>
      {{ props.subtitle }}
    </template>
    <template #content>
      <p class="m-0">
        {{ props.content }}
      </p>
    </template>
    <template #footer>
      <Button as="a" label="Подробнее" link :href="article_url" targret="_blank" />
    </template>
  </Card>
</template>

<style>
.news-card {
  max-width: 300px;
  max-height: 450px;
  height: 100%;
  overflow: hidden;
}

.news-card__image {
  width: 100%;
}

.news-card__title {
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3; 
  -webkit-box-orient: vertical;
}

.p-card-title {
}
</style>