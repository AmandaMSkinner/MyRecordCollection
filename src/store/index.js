import Vue from "vue";
import Vuex from "vuex";
//Reference: https://medium.com/@esmaydogdu/vuex-fetch-b0e8472e7676
const DISCOG_TOKEN="bIplSnkEnnCaSkeYTZeVeNSKsvjxtsWCrAKXauxi";
const DISCOG_URL ="https://api.discogs.com/users/amandaskinner/collection/folders/6034833/releases?token="+DISCOG_TOKEN+"&per_page=250&sort=artist";
//Only Records in my Showcase Folder go here!

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    releases: [],
  },
  
  mutations: {
    setReleases(state, releases) {
      state.releases = releases;
    },
  },
  
  actions: {
    fetchAllReleases(context) {
      return fetch(DISCOG_URL)
        .then((response) => response.json())
        .then((data) => {
          context.commit("setReleases", data);
        })
    },
  },
  
  getters: {
    releases(state) {
      return state.releases;
    },
  },
  
});