<template>
  <div class="home">
    <h3>{{headline}}</h3>
    <div class="option xs">
      {{choice}}
    </div>
    <grid></grid>
  </div>
</template>

<script>
import Grid from '../Grid/Grid'

export default {
  name: 'home',
  components: {
    Grid
  },
  data () {
    return {
      headline: this.$t('message.welcome'),
      choice: this.$t('message.choice')
    }
  }
}
</script>

<style scoped>
  .home {
      font-family: 'Press Start 2P', cursive;
      font-size: 20px;
  }

  .option {
    margin: 50px 50px;
  }

  .xs {
    font-size: 16px;
  }
</style>
