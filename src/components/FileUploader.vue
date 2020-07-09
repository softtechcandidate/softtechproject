<template>
  <b-overlay :show="uploadInProgress" rounded="sm">
    <div class="file-uploader">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        :placeholder="placeholderText"
        accept=".jpg, .png"
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <template v-if="file">
        <b-button @click="onSubmitFile" class="action-button">Submit file</b-button>
        <br />
      </template>
      <b-button
        @click="onTakePhotoClicked"
        variant="success"
        class="action-button"
      >Or take a photo by your camera</b-button>
    </div>
  </b-overlay>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "GalleryView",
  props: {},
  data() {
    return {
      file: null,
      uploadInProgress: false
    };
  },
  computed: {
    isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    placeholderText() {
      if (this.isMobileDevice) {
        return "Chose a file from your device";
      } else {
        return "Choose a file or drop it here";
      }
    }
  },
  methods: {
    ...mapActions(["saveImage"]),
    onTakePhotoClicked() {
      this.$router.push({ path: "camera" });
    },
    onSubmitFile() {
      this.uploadInProgress = true;
      this.saveImage(this.file).finally(() => {
        setTimeout(() => {
          this.uploadInProgress = false;
        }, 1000);
      });
    }
  },
  components: {}
};
</script> 
<style scoped lang="scss">
.file-uploader {
  padding: 0px 10px 0px 10px;
}
.action-button {
  margin: 5px;
}
</style>
