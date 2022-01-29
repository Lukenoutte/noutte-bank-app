<template>
  <q-page>
    <div class="q-px-md full-width">
      <div class="q-pt-lg row">
        <q-skeleton type="QAvatar" v-if="isLoading"  size="60px"/>
        <q-avatar size="60px" v-else>
          <img alt="Profile" src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="q-ml-lg flex items-center">
          <div>
            <div v-if="isLoading">
              <q-skeleton type="rect" width="150px"/>
              <q-skeleton type="rect" width="80px" class="q-mt-sm"/>
            </div>
            <div v-else>
              <p class="welcome-p">Welcome back,</p>
              <p style="font-weight: bold;" class="welcome-p">Lucas</p>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%;" class="q-mt-lg row">
        <IndexCardInformation
        title="Your tel. number"
        information="+55 991748462"
        style="margin-right: 5%;"
        :cardWidthPercente="55"
        :isLoading="isLoading"
        />

        <IndexCardInformation
        title="My Points"
        information="316"
        :cardWidthPercente="40"
        :isLoading="isLoading"
        />
      </div>
    </div>
    <IndexBalanceContainer/>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import IndexBalanceContainer from 'src/components/IndexBalanceContainer.vue'
import IndexCardInformation from 'src/components/IndexCardInformation.vue'
export default defineComponent({
  name: 'PageIndex',
  components: {
    IndexBalanceContainer,
    IndexCardInformation
  },
  setup () {
    const isLoading = ref(true)

    onMounted(() => {
      setInterval(() => { // Fake loading
        isLoading.value = false
      }, 1000)
    })

    return {
      isLoading
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