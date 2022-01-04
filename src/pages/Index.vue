<template>
  <q-page>
    <div class="q-px-md q-pt-lg row">
      <q-avatar size="60px">
        <img alt="Profile" src="https://avatars.githubusercontent.com/u/32497719?v=4">
      </q-avatar>
      <div class="q-ml-lg">
        <p class="welcome-p">Welcome back,</p>
        <p style="font-weight: bold;" class="welcome-p">Lucas</p>
      </div>

      <div style="width: 100%;" class="q-mt-lg row">
        <InfoBlock
        :title="'Current Balance'"
        :value="'R$ 0'"
        style="margin-right: 10%;"
        :executeOnClick="toggleShowCardContainer"
        :blockWidth="55"/>

        <InfoBlock
        :title="'My Points'"
        :value="'316'"
        :blockWidth="35"/>
      </div>

      <CardContainer :showCardContainer="showCardContainer"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CardContainer from 'src/components/CardContainer.vue'
import InfoBlock from 'src/components/InfoBlock.vue'
export default defineComponent({
  name: 'PageIndex',
  components: {
    CardContainer,
    InfoBlock
  },
  setup () {
    const showCardContainer = ref(false)

    return {
      showCardContainer,
      toggleShowCardContainer () {
        showCardContainer.value = !showCardContainer.value
      }
    }
  }

})
</script>

<style lang="scss" scoped>
  .welcome-p {
    color: white;
    margin: 0;
    font-size: 1.2em;
  }

</style>