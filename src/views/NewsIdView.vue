<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

import RapidSender from '@/api/rapid-sender';
import NewsSkeleton from '@/components/NewsSkeleton.vue';

const route = useRoute();
const loading = ref(true);
const news = ref(null);

onMounted(async () => {
  const sender = new RapidSender();
  const res = await sender.get('/game', { id: route.params.id });
  news.value = res.data;
});
</script>

<template>
  <main class="news-view">
    <transition name="fade">
      <div v-if="loading" class="news-view__loading">
        <NewsSkeleton />
      </div>
      <div v-else class="news-view__content"></div>
    </transition>
  </main>
</template>