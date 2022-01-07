<template>
  <q-page>
    <div class="q-px-md full-width">
      <div class="q-pt-lg row">
        <q-avatar size="60px">
          <img alt="Profile" src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="q-ml-lg flex items-center">
          <div>
            <p class="welcome-p">Welcome back,</p>
            <p style="font-weight: bold;" class="welcome-p">Lucas</p>
          </div>
        </div>
      </div>
      <div style="width: 100%;" class="q-mt-lg row">
        <LittleCardInformation
        :title="'Current Balance'"
        :information="'R$ 600,00'"
        style="margin-right: 5%;"
        :cardWidthPercente="55"/>

        <LittleCardInformation
        :title="'My Points'"
        :information="'316'"
        :cardWidthPercente="40"/>
      </div>
    </div>
    <FullBalanceContainer/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import FullBalanceContainer from 'src/components/FullBalanceContainer.vue'
import LittleCardInformation from 'src/components/LittleCardInformation.vue'
export default defineComponent({
  name: 'PageIndex',
  components: {
    FullBalanceContainer,
    LittleCardInformation
  },
  setup () {
    return {
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