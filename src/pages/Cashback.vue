<template>
  <q-page>
    <div class="q-my-md row flex justify-center full-width relative-position">
    </div>
    <ButtonNoBackground text="Cashback" class="q-mt-xl"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ButtonNoBackground from 'src/components/ButtonNoBackground.vue'
export default defineComponent({
  name: 'Cashback',
  setup () {
    return {
    }
  },
  components: {
    ButtonNoBackground
  }
})
</script>

<style lang="scss" scoped>
</style>