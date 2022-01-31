<template>
  <div class="bottom-container flex justify-center q-mt-lg q-pb-lg q-pa-md main-container">
      <q-btn unelevated no-caps align="left" class="card q-pa-lg" :ripple="{ color: 'white' }">
        <div class="column text-left full-height flex justify-center">
          <p class="title-p">Balance</p>
          <q-skeleton v-if="isLoading" width="135px" height="40px" class="q-skeleton-changed"/>
          <p class="value-p" v-else>600,00</p>
          <q-skeleton v-if="isLoading" width="180px" height="15px" class="updated-at q-mb-md q-skeleton-changed"/>
          <p class="updated-at" v-else>Updated today at 14:05</p>
        <div class="icon-card-container column">
          <q-icon name="add" class="card-icon"/>
          <q-icon style="margin-top: 40px;" name="refresh" class="card-icon"/>
        </div>
        </div>
      </q-btn>
      <div class="q-my-md row flex justify-center full-width">
        <IndexBlockButton transition-show="slide-right" iconName="description" text="Payment" routeName="payment" />
        <IndexBlockButton iconName="paid" text="Cashback" class="q-ml-auto" routeName="cashback"/>
        <IndexBlockButton iconName="lightbulb" text="Personal offer" class="q-mt-md" routeName="personal-offer"/>
        <IndexBlockButton iconName="work" text="Services" class="q-ml-auto q-mt-md" routeName="services"/>
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';
import IndexBlockButton from 'src/components/IndexBlockButton.vue'
export default defineComponent({
  name: 'FullBalanceContainer',
  props: {
    isLoading: { type: Boolean }
  },
  components: {
    IndexBlockButton
  }
})
</script>

<style lang="scss" scoped>
  .bottom-container{
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
    font-size: 0.9em;
    position: absolute;
    bottom: 0;
  }

  .value-p {
    font-size: 3em;
    color: white;
    font-weight: bold;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .icon-card-container{
    position: absolute;
    right: 5%;
  }

  .main-container{
    position: relative;
  }

  .card-icon{
    color: white;
    font-size: 2.2em;
  }


  @media (max-width: 330px) {
    .bottom-container{
      height: 50%;
    }
  }


</style>