<template>
  <q-layout view="lHr lpr lfr">
    <Header/>
    <q-page-container class="bg-color flex justify-center">
      <div class="screen-size">
        <q-btn>Back</q-btn>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import Header from 'src/components/Header.vue'
export default defineComponent({
  name: 'SecondaryLayout',
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
  .bg-color {
      background: $background;
  }
  .screen-size{
    max-width: 540px;
  }
</style>