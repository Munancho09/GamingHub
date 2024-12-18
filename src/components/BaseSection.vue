<script setup>
const props = defineProps({
  title:  String,
});
</script>

<template>
  <section class="base-section">
    <h2 v-if="props.title" class="base-section__title">
      {{ props.title }}
    </h2>
    <slot />
  </section>
</template>

<style>
.base-section {
  margin: 2rem 0;
}

.base-section__title {
  margin: 0 0 1rem 0;
}
</style>