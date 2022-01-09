<template>
  <div class="bottom-container flex justify-center q-mt-lg q-pb-lg q-pa-md">
      <q-btn unelevated no-caps align="left" class="card q-pa-lg" :ripple="{ color: 'white' }">
        <div class="column text-left">
          <p class="title-p">Balance</p>
          <p class="value-p">600,00</p>
          <p class="updated-at">Updated today at 14:05</p>
        </div>
      </q-btn>
      <div class="q-my-md row flex justify-center full-width">
        <IconBlock transition-show="slide-right" :iconName="'description'" :text="'Payment History'" :routeName="'payment-history'" />
        <IconBlock :iconName="'paid'" :text="'Cashback'" class="q-ml-auto"/>
        <IconBlock :iconName="'lightbulb'" :text="'Personal offer'" class="q-mt-md"/>
        <IconBlock :iconName="'work'" :text="'Services'" class="q-ml-auto q-mt-md"/>
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';
import IconBlock from 'src/components/IconBlock.vue'
export default defineComponent({
  name: 'FullBalanceContainer',
  components: {
    IconBlock
  }
})
</script>

<style lang="scss" scoped>
  .bottom-container{
    height: 100%;
    width: 100%;
    background: $background-secondary;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .card {
    width: 100%;
    height: 200px;
    background: $primary;
    border-radius: 20px;
    position: relative;
  }

  .title-p {
    color: white;
    position: absolute;
    top: 10%;
  }

  .updated-at {
    color: white;
    font-size: 0.8em;
    position: absolute;
    bottom: 0;
  }

  .value-p {
    font-size: 3em;
    color: white;
    font-weight: bold;
  }

  @media (max-width: 330px) {
    .bottom-container{
      height: 50%;
    }

  }

</style>