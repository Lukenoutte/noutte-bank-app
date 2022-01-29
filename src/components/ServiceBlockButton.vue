<template>
    <q-btn unelevated no-caps :ripple="{ color: 'primary' }" class="block-container" @click="pushToRoute(routeName)">
      <div class="flex justify-center items-center column full-width">
        <div class="cicle-icon">
          <q-icon :name="iconName" class="main-icon primary-color" style="font-size: 2.5em;"/>
        </div>
        <p class="description-text">{{ text }}</p>
      </div>
    </q-btn>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ServiceBlockButton',
  props: {
    text: { type: String },
    iconName: { type: String }
  },
})
</script>

<style lang="scss" scoped>
  .block-container{
    background: $block-color-light;
    height: 160px;
    width: 48%;
    border-radius: 15px;
    border: 0;
  }

  .description-text {
    font-size: 1em;
    margin-top: 8%;
    color: $block-title;
    margin-bottom: 0;
  }

  .cicle-icon {
    background: $cicle-button;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 375px) {
    .description-text{
      font-size: 0.8em;
    }

  }

</style>