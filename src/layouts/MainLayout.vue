<template>
  <transition
    appear
    enter-active-class="animated slideInLeft"
  >
    <q-layout view="lhr lpr lfr">
      <Header/>
      <q-page-container class="bg-color flex justify-center">
        <div class="screen-size">
          <router-view />
        </div>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

import { defineComponent, ref } from 'vue'
import Header from 'src/components/Header.vue'
export default defineComponent({
  name: 'MainLayout',
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