<template>
  <div class="home">
    <GalleryView></GalleryView>
    <FileUploader></FileUploader>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GalleryView from "./GalleryView";
import FileUploader from "./FileUploader";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    setTimeout(() => {
      this.fetchImageList();
    }, 1000);
  },
  computed: {
    ...mapState(["theData"]),
    computedData() {
      return this.theData;
    }
  },
  methods: {
    ...mapActions(["fetchImageList"])
  },
  components: { GalleryView, FileUploader }
};
</script>

<style scoped lang="scss">
.home {
}
</style>
