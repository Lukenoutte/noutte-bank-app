<template>
  <q-page>
    <div class="full-width">
      <p class="sub-title"> Payment amount </p>
      <span class="value-span"> 320,00 </span>
      <p class="sub-title"> Tel. nomber </p>
      <div class="row flex justify-between">
        <span class="phone-number"> +55 75 9 91546454 </span>
        <q-icon name="person" class="person-icon"/>
      </div>
      <div class="q-mt-xl flex justify-center">
        <div class="middle-line"></div>
      </div>
      <div class="q-mt-xl justify-between row flex items-center">
        <ButtonNoBackground text="Promissed payment" />
        <q-icon name="help_outline" class="icon"/>
      </div>
      <q-btn no-caps :ripple="{ color: 'white' }" class="full-button"> Pay </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ButtonNoBackground from 'src/components/ButtonNoBackground.vue'
export default defineComponent({
  name: 'PaymentHistory',
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

  .sub-title {
    color: $subtitle;
    font-size: 1.2em;
  }

  .value-span {
    font-size: 3em;
    font-weight: 600;
    color: white;
   }

   .phone-number{
     color: white;
     font-size: 1.5em;
     font-weight: 500;
   }

   .person-icon{
      color: $primary;
      font-size: 2em;
   }

   .middle-line{
     border-bottom: 1px solid $subtitle;
     width: 60%;
   }

  .icon{
    color: $primary;
    font-size: 1.7em;
  }

  .full-button {
    background: $primary;
    border-radius: 15px;
    width: 100%;
    border: 0;
    height: 70px;
    margin-top: 40px;
    font-size: 1.3em;
    color: $background;
    font-weight: 600;
  }
</style>