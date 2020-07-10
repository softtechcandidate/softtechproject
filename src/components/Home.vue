<template>
  <div class="home">
    <GalleryView></GalleryView>
    <FileUploader></FileUploader>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import GalleryView from './GalleryView.vue';
import FileUploader from './FileUploader.vue';

export default {
  name: 'Home', 
  created() {
    setTimeout(() => {
      this.fetchImageList();
    }, 1000);
  },
  computed: {
    ...mapState(['theData']),
    computedData() {
      return this.theData;
    },
  },
  methods: {
    ...mapActions(['fetchImageList']),
  },
  components: { GalleryView, FileUploader },
};
</script>

<style scoped lang="scss">
</style>
