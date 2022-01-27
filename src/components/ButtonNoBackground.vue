<template>
  <q-btn no-caps :ripple="{ color: 'primary' }"  class="button-outline flex items-center">
    <span class="span-on-button">{{ text }}</span>
    <q-icon name="chevron_right" class="arrow-icon icon"/>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ButtonNoBackground',
  props: {
    text: { type: String },
  }
})
</script>

<style lang="scss" scoped>
  .button-outline {
    border: 1px solid $primary;
    background: transparent;
    color: white;
    height: 70px;
    width: 210px;
    border-radius: 15px;
    position: relative;
  }

  .span-on-button {
    position: absolute;
    left: 15px;
    font-weight: 400;
  }

  .arrow-icon{
    position: absolute;
    right: 10px;
  }

  .icon{
    color: $primary;
    font-size: 1.7em;
  }

</style>