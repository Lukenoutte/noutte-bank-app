<template>
  <div class="block-container flex justify-center items-center column">
    <q-icon :name="iconName" class="main-icon"/>
    <p class="description-text">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LittleCardInformation',
  props: {
    text: { type: String },
    iconName: { type: String }
  }
})
</script>

<style lang="scss" scoped>
  .block-container{
    background: $block-color-light;
    height: 160px;
    width: 48%;
    border-radius: 15px;
  }

  .main-icon{
    color: $primary;
    font-size: 3em;
  }

  .description-text{
    color: $primary;
    font-size: 1em;
    margin-top: 10%;
  }

  @media (max-width: 375px) {
    .description-text{
      font-size: 0.8em;
    }

  }

</style>