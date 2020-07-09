<template>
  <div class="home"> 
    <Navbar></Navbar>
    <GalleryView></GalleryView>
    <FileUploader></FileUploader>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './Navbar';
import GalleryView from './GalleryView';
import FileUploader from './FileUploader';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['theData']),   
    computedData() {
      return this.theData;
    }
  },
  components: { Navbar, GalleryView, FileUploader }
};
</script>

<style scoped lang="scss">
.home { 
}
</style>
