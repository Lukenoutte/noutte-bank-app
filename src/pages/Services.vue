<template>
  <q-page>
    <div class="q-my-md row flex justify-center full-width relative-position">
      <ServiceBlockButton class="q-ml-auto" iconName="mail_outline" text="Messages"/>
      <ServiceBlockButton class="q-ml-auto" iconName="call" text="Calls"/>
      <ServiceBlockButton class="q-ml-auto q-mt-sm" iconName="wifi" text="Internet"/>
      <ServiceBlockButton class="q-ml-auto q-mt-sm" iconName="tag" text="Social network"/>
    </div>
    <ButtonNoBackground text="Available service" class="q-mt-xl"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ServiceBlockButton from 'src/components/ServiceBlockButton.vue'
import ButtonNoBackground from 'src/components/ButtonNoBackground.vue'
export default defineComponent({
  name: 'Services',
  setup () {
    return {
    }
  },
  components: {
    ServiceBlockButton,
    ButtonNoBackground
  }
})
</script>

<style lang="scss" scoped>
</style>