import Vue from 'vue';
import Vuex from 'vuex';
import GalleryManager from '../serverConnectors/GalleryManager';
Vue.use(Vuex);

let galleryManager = new GalleryManager();

export default new Vuex.Store({
  state: {
    imageList: []
  },
  actions: {
    fetchImageList({ commit }) {
      return galleryManager.fetchImages().then(jsonData => {
        commit("SAVE_IMAGE_LIST", jsonData);
      });
    },
    saveImage({ dispatch }, file) {
      return galleryManager.saveImage(file).then(() => {
        return dispatch("fetchImageList");
      });
    },
    saveBase64Image({ dispatch }, base64Data) {
      return galleryManager.saveBase64Image(base64Data).then(() => {
        return dispatch("fetchImageList");
      });
    }
  },
  mutations: {
    SAVE_IMAGE_LIST(state, jsonData) {
      state.imageList = jsonData;
    }
  },
  modules: {
  },
});
