<template>
    <button class="block-container" @click="pushToRoute(routeName)">
      <div class="flex justify-center items-center column">
      <q-icon :name="iconName" class="main-icon"/>
      <p class="description-text">{{ text }}</p>
      </div>
    </button>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'LittleCardInformation',
  props: {
    text: { type: String },
    iconName: { type: String },
    routeName: { type: String, default: '' }
  },
  setup: () => {
    const router = useRouter();
    const parentPath = '/details'
    const pushToRoute = (routeName) => {
      router.push(parentPath + '/' + routeName);
    }

    return { pushToRoute }
  }
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