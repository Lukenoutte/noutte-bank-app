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
        <IndexBlockButton transition-show="slide-right" :iconName="'description'" :text="'Payment History'" :routeName="'payment-history'" />
        <IndexBlockButton :iconName="'paid'" :text="'Cashback'" class="q-ml-auto"/>
        <IndexBlockButton :iconName="'lightbulb'" :text="'Personal offer'" class="q-mt-md"/>
        <IndexBlockButton :iconName="'work'" :text="'Services'" class="q-ml-auto q-mt-md"/>
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';
import IndexBlockButton from 'src/components/IndexBlockButton.vue'
export default defineComponent({
  name: 'FullBalanceContainer',
  components: {
    IndexBlockButton
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