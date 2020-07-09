<template>
  <div class="file-uploader">
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GalleryView",
  props: {},
  data() {
    return {
      file: null
    };
  },
  computed: {},
  components: {}
};
</script> 
<style scoped lang="scss">
.file-uploader {
  padding: 0px 10px 0px 10px;
}
</style>
