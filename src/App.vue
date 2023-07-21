<template>
  <app-navigation></app-navigation>


  <router-view></router-view>

  <page-footer></page-footer>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import PageFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppNavigation,
    PageFooter,
  }
};
</script>

<style scoped>
.v-app-bar {
  font-family: 'Montserrat', sans-serif;
}

.v-btn,
.v-list-item {
  font-family: 'Montserrat', sans-serif !important;
}
</style>