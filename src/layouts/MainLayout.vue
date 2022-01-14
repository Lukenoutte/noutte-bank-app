<template>
  <transition
    appear
    enter-active-class="animated slideInLeft"
  >
    <q-layout view="lhr lpr lfr">
      <TheHeader/>
      <q-page-container class="bg-color flex justify-center">
        <div class="max-screen-size">
          <router-view />
        </div>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

import { defineComponent, ref } from 'vue'
import TheHeader from 'src/components/TheHeader.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    TheHeader
  }
})
</script>

<style lang="scss" scoped>
  .bg-color {
      background: $background;
  }
</style>