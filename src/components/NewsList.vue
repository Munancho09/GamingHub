<script setup>
import { defineProps } from 'vue';
import NewsCard from './NewsCard.vue';

const props = defineProps({
  list: Array,
})
</script>

<template>
  <div class="news-list">
    <NewsCard 
      v-for="news in props.list"
      :key="news.id"
      class="news-list__news-card"
      :id="news.id"
      :title="news.title"
      :subtitle="news.short_description"
      :preview="news.main_image"
      :article_url="news.article_url"
    />
  </div>
</template>

<style>
.news-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  gap: 0.5rem;
}

.news-list__news-card {
}
</style>