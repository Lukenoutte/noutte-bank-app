<template>
  <q-page>
    <div class="q-px-md q-pt-lg row">
      <q-avatar size="60px">
        <img alt="Profile" src="https://avatars.githubusercontent.com/u/32497719?v=4">
      </q-avatar>
      <div class="q-ml-lg flex items-center">
        <div>
          <p class="welcome-p">Welcome back,</p>
          <p style="font-weight: bold;" class="welcome-p">Lucas</p>
        </div>
      </div>

      <div style="width: 100%;" class="q-mt-lg row">
        <LittleCardInformation
        :title="'Current Balance'"
        :information="'R$ 0'"
        style="margin-right: 10%;"
        :executeOnClick="toggleShowFullBalanceContainer"
        :cardWidthPercente="55"/>

        <LittleCardInformation
        :title="'My Points'"
        :information="'316'"
        :cardWidthPercente="35"/>
      </div>

      <div class="q-mt-lg q-gutter-md row flex justify-center full-width" v-if="!showFullBalanceContainer">
        <IconBlock :iconName="'description'" :text="'Payment History'" />
        <IconBlock :iconName="'paid'" :text="'Cashback'"/>
        <IconBlock :iconName="'lightbulb'" :text="'Personal offer'"/>
        <IconBlock :iconName="'work'" :text="'Services'"/>
      </div>

      <FullBalanceContainer :showFullBalanceContainer="showFullBalanceContainer"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import FullBalanceContainer from 'src/components/FullBalanceContainer.vue'
import IconBlock from 'src/components/IconBlock.vue'
import LittleCardInformation from 'src/components/LittleCardInformation.vue'
export default defineComponent({
  name: 'PageIndex',
  components: {
    FullBalanceContainer,
    LittleCardInformation,
    IconBlock
  },
  setup () {
    const showFullBalanceContainer = ref(false)

    return {
      showFullBalanceContainer,
      toggleShowFullBalanceContainer () {
        showFullBalanceContainer.value = !showFullBalanceContainer.value
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