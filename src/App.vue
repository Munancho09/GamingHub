<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import Menubar from 'primevue/menubar';

const menu = ref([
  {
    label: 'Главная',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Форум',
    icon: 'pi pi-star',
    route: '/forum',
  },
]);
</script>

<template>
    <Menubar class="header" :model="menu">
      <template #item="{ item, props, hasSubmenu }">
          <router-link v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span>{{ item.label }}</span>
              </a>
          </router-link>
      </template>
  </Menubar>
  <RouterView />
</template>

<style scoped>
.header {
  max-width: 1280px;
  margin: auto;
  margin-top: 1rem;
}

.header__item {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
