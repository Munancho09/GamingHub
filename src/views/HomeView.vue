<script setup>
import { onMounted, ref } from 'vue';

import RapidSender from '@/api/rapid-sender';
import BaseSection from '@/components/BaseSection.vue';
import NewsList from '@/components/NewsList.vue';
import NewsListSkeleton from '@/components/NewsListSkeleton.vue';

const news = ref([]);
const loading = ref(true);

onMounted(async () => {
  const sender = new RapidSender();
  const res = await sender.get('/latestnews');
  news.value = res.data;
  loading.value = false;
});
</script>

<template>
  <main>
    <BaseSection title="Новости">
      <Transition>
        <NewsListSkeleton v-if="loading" />
        <NewsList v-else :list="news" />
      </Transition>
    </BaseSection>
  </main>
</template>
