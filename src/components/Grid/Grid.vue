<template>
    <div class="grid-container">
        <div class="grid-container-inside">
            <tile></tile>
        </div>
    </div>
</template>

<script>
import Tile from './Tile'
export default {
  name: 'Grid',
  components: {
    Tile
  }
}
</script>

<style scoped>
    .grid-container {
        width: 80%;
        margin: 0 10%;
    }
</style>