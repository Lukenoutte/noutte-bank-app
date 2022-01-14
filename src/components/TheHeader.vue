<template>
  <q-header class="bg-color q-pt-lg">
    <q-toolbar>
      <q-icon name="api" class="primary-color" style="font-size: 1.5em;"/>
      <q-toolbar-title class="primary-color" style="font-size: 1em;">
        Noutte Bank
      </q-toolbar-title>

      <q-btn flat round dense icon="search" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader'
})
</script>

<style lang="scss" scoped>
  .bg-color {
      background: $background;
  }
</style>