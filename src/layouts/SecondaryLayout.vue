<template>
  <q-layout view="lHr lpr lfr">
    <Header/>
    <q-page-container class="bg-color">
      <div class="row q-px-md q-mt-md flex items-center">
        <button class="button-back">
          <q-icon name="chevron_left" class="icon-button-back"/>
        </button>
        <span class="q-ml-md screen-title">{{ route.meta.title }}</span>
      </div>
      <div class="bottom-container q-mt-lg q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import Header from 'src/components/Header.vue'
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'SecondaryLayout',
  components: {
    Header
  },
  setup () {
    const route = useRoute();
    return { route }
  }
})
</script>

<style lang="scss" scoped>
  .button-back{
    border: 1px solid $primary;
    border-radius: 10px;
    width: 30px;
    height: 44px;
    background: transparent;
    padding: 0;
  }

  .icon-button-back {
    color: $primary;
    font-size: 1.6em;
  }

  .screen-title {
    color: $primary;
    font-size: 1.2em;
  }

  .bottom-container{
    height: 100%;
    width: 100%;
    background: $background-secondary;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
</style>