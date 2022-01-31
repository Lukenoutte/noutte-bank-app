<template>
  <div class="info-container row q-pa-md" :style="{ width: cardWidthPercente + '%' }">
    <div>
      <p class="title"> {{ title }} </p>
      <q-skeleton v-if="isLoading" type="rect" width="70%"/>
      <p class="value" v-else> {{ information }} </p>
    </div>
    <div class="row items-center">
      <q-icon name="chevron_right" class="arrow-icon primary-color"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexCardInformation',
  props: {
    title: { type: String },
    information: { type: String },
    cardWidthPercente: { type: Number },
    isLoading: { type: Boolean }
  }
})
</script>

<style lang="scss" scoped>
  .title{
    color: $subtitle;
    font-size: 1em;
  }

  .value {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
  }

  .info-container{
    height: 100px;
    border: 1px solid $primary;
    border-radius: 15px;
    background: $block-color;
    position: relative;
  }

  .arrow-icon{
    font-size: 2em;
    position: absolute;
    right: 3px;
    top: 38%;
  }
</style>