<template>
  <div class="home">
    <h3>{{headline}}</h3>

    <div class="option xs">
      Please select one:
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
      headline: 'Welcome to boardgame companions'
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
