<template>
    <div class="tile">
        <div class="tile-inside">
            <img src="../../assets/betrayal.png"/>
            <p>{{description}}</p>
        </div>
        <div class="tile-inside">
            <img src="http://via.placeholder.com/250x200"/>
        </div>
        <div class="tile-inside">
            <img src="http://via.placeholder.com/250x200"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Tile',
    data () {
      return {
        description: 'Betrayal of House of the Hill'
      }
    }
  }
</script>

<style scoped>
  .tile {
      height: 300px;
  }

  .tile-inside {
      width: 25%;
      padding: 20px;
      margin: 0 2%;
      float: left;
      cursor: pointer;
      border: 2px dotted #000;
  }

  .tile-inside img {
      max-width: 250px;
      max-height: 200px;
  }

  .tile-inside p {
      font-size: 12px;
  }
</style>