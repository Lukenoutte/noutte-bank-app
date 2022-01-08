<template>
  <q-header class="bg-color q-pt-lg">
    <q-toolbar>
      <q-icon name="api" class="main-icon"/>
      <q-toolbar-title class="main-name">Noutte Bank</q-toolbar-title>

      <q-btn flat round dense icon="search" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss" scoped>
  .bg-color {
      background: $background;
  }
  .main-name {
      color: $primary;
      font-size: 1em;
  }
  .main-icon {
      color: $primary;
      font-size: 1.5em;
  }
</style>