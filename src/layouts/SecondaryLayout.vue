<template>
  <transition
    appear
    enter-active-class="animated slideInRight"
  >
    <q-layout view="lHr lpr lfr">
      <TheHeader/>
      <q-page-container class="bg-color">
        <div class="full-width flex justify-center">
          <div class="max-screen-size full-width">
            <div class="row q-px-md q-mt-md flex items-center">
              <button @click="backToIndex" class="button-back">
                <q-icon name="chevron_left" class="icon-button-back"/>
              </button>
              <span class="q-ml-md screen-title">{{ route.meta.title }}</span>
            </div>
            <div class="bottom-container q-mt-lg q-pa-lg">
              <router-view />
            </div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

import { defineComponent } from 'vue'
import TheHeader from 'src/components/TheHeader.vue'
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'SecondaryLayout',
  components: {
    TheHeader
  },
  setup () {
    const route = useRoute();
    const router = useRouter();

    const backToIndex = () => {
      router.back();
    }

    return { route, backToIndex }
  }
})
</script>

<style lang="scss" scoped>
  .button-back {
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

  .bottom-container {
    height: 100%;
    width: 100%;
    background: $background-secondary;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

</style>