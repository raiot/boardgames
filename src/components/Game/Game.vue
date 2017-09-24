<script>
import { mapGetters } from 'vuex'
import {betrayalTemplate} from '../../game-templates/betrayal.html'

export default {
  computed: {
    ...mapGetters({
      game: 'game'
    })
  },
  name: 'Game',
  created () {
    this.$store.dispatch('getGameData')
  },
  template: betrayalTemplate
}
</script>

<style scoped>
</style>