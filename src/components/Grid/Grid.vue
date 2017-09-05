<template>
    <div class="grid-container">
        <div class="grid-container-inside">
            <div class="tile" v-for="c in companions" v-bind:key="c.id">
                <div class="tile-inside" v-on:click="navigate(c)">
                    <img :src="`${c.imgSrc}`"/>
                    <p>{{c.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as utils from '../../utils/url-sanitizer'

export default {
  computed: {
    ...mapGetters({
      companions: 'allCompanions'
    })
  },
  name: 'Grid',
  created () {
    this.$store.dispatch('getAllCompanions')
  },
  methods: {
    navigate (companion) {
      const sanitizedName = utils.sanitize(companion.title)
      this.$router.push(`game/${companion.id}/${sanitizedName}`)
    }
  }
}
</script>

<style scoped>
    .grid-container {
        width: 80%;
        margin: 0 10%;
    }

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