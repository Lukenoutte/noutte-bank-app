<template>
  <div class="bottom-container flex justify-center" v-if="showFullBalanceContainer">
      <div class="card" style="margin-top: 5%;">

      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FullBalanceContainer',
  props: {
    showFullBalanceContainer: { type: Boolean }
  }
})
</script>

<style lang="scss" scoped>
  .bottom-container{
    height: 60%;
    width: 100%;
    background: $background-secondary;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .card {
    width: 92%;
    height: 200px;
    background: $primary;
    border-radius: 20px;
  }
  @media (max-width: 330px) {
    .bottom-container{
      height: 50%;
    }

  }

</style>