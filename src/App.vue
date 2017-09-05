<template>
  <div id="app">
    <lang></lang>
    <router-view></router-view>
  </div>
</template>

<script>
import Lang from './components/Lang/Lang'

export default {
  name: 'app',
  components: {
    Lang
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
