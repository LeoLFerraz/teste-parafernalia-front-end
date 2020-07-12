<template>
  <div id="app">
    <b-container>
      <b-row>
        <BaseSearch />
      </b-row>
      <b-row>
        <b-col md="12" v-if="isMobile()">
          <BaseVideoPlayer />
        </b-col>
        <b-col md="12" lg="6">
          <BaseVideoResults />
        </b-col>
        <b-col lg="6" v-if="!isMobile()">
          <BaseVideoPlayer />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseSearch from './components/base-search/base-search';
import BaseVideoPlayer from './components/base-video-player/base-video-player';
import BaseVideoResults from './components/base-video-results/base-video-results';

export default {
  name: 'App',
  components: {
    BaseSearch,
    BaseVideoPlayer,
    BaseVideoResults,
  },
  methods: {
    // To avoid having 2 of the same iframe. Youtube uses event-based commands, so that would cause a couple of bugs ;)
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  html {
    font-size: 16px;
    @media (max-width: $breakpoint-mobile) {
      font-size: 12px;
    }
  }
  body {
    padding-top: 20px;
    background-color: $c-surface;
    color: $c-low-contrast;
  }
  header {
    background-color: $c-primary;
    h1 {
      font-size: 2rem;
      padding: 10px 0;
    }
  }
</style>
