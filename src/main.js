import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuex from 'vuex';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex);

// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  state: {
    activeVideo: "",
    currentPreviewVideos: [],
    isPlaying: "",
    currentSearch: ""
  },
  mutations: {
    updateActiveVideo(state, video) {
      if(typeof(video) === "object") {
        state.activeVideo = video;
      } else {
        console.error("Could not update current video. Parameter is not a video object.");
      }
    },
    updateIsPlaying(state, status) {
      if(typeof(status) === "boolean") {
        state.isPlaying = status;
      } else {
        console.error("Could not update isPlaying. Parameter is not boolean.");
      }
    },
    updateCurrentSearch(state, search) {
      if(typeof(search) === "string") {
        state.currentSearch = search;
      } else {
        console.error("Could not update current search. Parameter is not string.");
      }
    },
    updateCurrentPreviewVideos(state, {videos, newSearch = true}) {
      if(typeof(videos) === "object") {
        if(newSearch) {
          state.currentPreviewVideos = videos;
          return;
        }
        for(let video of videos) {
          state.currentPreviewVideos.push(video);
        }
      } else {
        console.error("Could not update video list. Parameter is not an array.");
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
