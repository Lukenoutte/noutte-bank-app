<template>
  <q-layout view="lHr lpr lfr">
    <q-header class="bg-color q-pt-lg">
      <q-toolbar>
        <q-icon name="api" class="main-icon"/>
        <q-toolbar-title class="main-name">Noutte Bank</q-toolbar-title>

        <q-btn flat round dense icon="search" />
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-color flex justify-center">
      <div class="screen-size">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout'
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
  .screen-size{
    max-width: 540px;
  }
</style>