<template>
  <div class="lang-selector">
   <select id="lang-select" name="lang" v-on:change="storeLang">
    <option :selected="langIndex === l.id" v-bind:key="l.id" v-for="l in value">
      {{l.value}}
    </option>
   </select>
  </div>
</template>

<script>
import {LangStorage} from '../../universal/langService'
export default {
  name: 'lang',
  methods: {
    storeLang (evt) {
      LangStorage.store(evt.target.selectedIndex)
      window.location.reload()
    }
  },
  data () {
    return {
      langIndex: parseInt(LangStorage.getLangId(), 10) || 0,
      value: [{
        id: 0,
        name: 'es_mx',
        value: 'Español'
      }, {
        id: 1,
        name: 'en_us',
        value: 'English'
      }]
    }
  }
}
</script>

<style scoped>
  .lang-selector {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
  }
</style>