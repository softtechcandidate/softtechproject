import Vue from 'vue';
import Vuex from 'vuex';
import GalleryManager from '../serverConnectors/GalleryManager';

Vue.use(Vuex);

const galleryManager = new GalleryManager();

export default new Vuex.Store({
  modules: {},
  state: {
    imageList: [],
  },
  actions: {
    fetchImageList({ commit }) {
      return galleryManager.fetchImages().then((jsonData) => {
        commit('SAVE_IMAGE_LIST', jsonData);
      });
    },
    saveImage({ dispatch }, file) {
      return galleryManager.saveImage(file).then(() => dispatch('fetchImageList'));
    },
    saveBase64Image({ dispatch }, base64Data) {
      return galleryManager.saveBase64Image(base64Data).then(() => dispatch('fetchImageList'));
    },
  },
  mutations: {
    SAVE_IMAGE_LIST(state, jsonData) {
      state.imageList = jsonData;
    },
  },
});
