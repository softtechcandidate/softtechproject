import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageList : [
      { large: "https://picsum.photos/512/240/?image=1", thumb: "https://picsum.photos/64/30/?image=1" },
      { large: "https://picsum.photos/512/240/?image=2", thumb: "https://picsum.photos/64/30/?image=2" },
      { large: "https://picsum.photos/512/240/?image=3", thumb: "https://picsum.photos/64/30/?image=3" },
      { large: "https://picsum.photos/512/240/?image=4", thumb: "https://picsum.photos/64/30/?image=4" },
      { large: "https://picsum.photos/512/240/?image=5", thumb: "https://picsum.photos/64/30/?image=5" },
      { large: "https://picsum.photos/512/240/?image=6", thumb: "https://picsum.photos/64/30/?image=6" },
      { large: "https://picsum.photos/512/240/?image=7", thumb: "https://picsum.photos/64/30/?image=7" },
      { large: "https://picsum.photos/512/240/?image=8", thumb: "https://picsum.photos/64/30/?image=8" },
      { large: "https://picsum.photos/512/240/?image=9", thumb: "https://picsum.photos/64/30/?image=9" },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
