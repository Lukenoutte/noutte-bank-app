<template>
  <div class="info-container row q-pa-md" :style="{ width: blockWidth + '%' }" @click="executeOnClick">
    <div>
      <p class="title"> {{ title }} </p>
      <p class="value"> {{ value }} </p>
    </div>
    <div class="row items-center full-height">
      <q-icon name="chevron_right" class="arrow-icon"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBlock',
  props: {
    title: { type: String },
    value: { type: String },
    executeOnClick: { type: Function },
    blockWidth: { type: Number }
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
    color: $primary;
    font-size: 2em;
    position: absolute;
    right: 3px;
  }
</style>