<template>
  <q-page>
    <div class="full-width">
      <p class="sub-title"> Payment amount </p>
      <span class="value-span"> 600,00 </span>
      <p class="sub-title"> Tel. nomber </p>
      <div class="row flex justify-between">
        <span class="phone-number"> +55 75 991546454 </span>
        <q-icon name="person" class="person-icon"/>
      </div>
      <div class="q-mt-xl flex justify-center">
        <div class="middle-line"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PaymentHistory',
  setup () {
    return {
    }
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
   }

   .person-icon{
      color: $primary;
      font-size: 2em;
   }

   .middle-line{
     border-bottom: 1px solid $subtitle;
     width: 60%;
   }
</style>