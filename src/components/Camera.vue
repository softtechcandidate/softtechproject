<template>
  <b-overlay :show="uploadInProgress" rounded="sm">
    <div>
      <template v-if="snapshotBase64 == null">
        <b-button class="action-button" @click="onTakeAPhotoClicked">Capture Photo</b-button>
        <br />
        <video id="webcam" autoplay playsinline width="320" height="240"></video>
        <canvas id="canvas" class="d-none"></canvas>
        <audio id="snapSound" src="@/assets/snap.wav" preload="auto"></audio>
      </template>
      <template v-else>
        <b-button class="action-button" @click="snapshotBase64 = null" >Clear photo</b-button>
        <b-button class="action-button" @click="uploadBase64Image" variant="success">Upload photo</b-button>
        <br />
        <img :src="snapshotBase64" />
      </template>
    </div>
  </b-overlay>
</template>

<script>
import Webcam from 'webcam-easy';
import { mapActions } from 'vuex';

let webcamElement;
let canvasElement;
let snapSoundElement;
let webcam;

export default {
  name: 'Camera',
  props: {},
  data() {
    return {
      snapshotBase64: null,
      uploadInProgress: false,
    };
  },
  mounted() {
    this.initWebcam();
  },
  computed: {},
  methods: {
    ...mapActions(['saveBase64Image']),
    onTakeAPhotoClicked() {
      const picture = webcam.snap();
      this.snapshotBase64 = picture;
      webcam.stop();
    },
    initWebcam() {
      webcamElement = document.getElementById('webcam');
      canvasElement = document.getElementById('canvas');
      snapSoundElement = document.getElementById('snapSound');
      webcam = new Webcam(
        webcamElement,
        'user',
        canvasElement,
        snapSoundElement,
      );

      webcam
        .start()
        .then(() => {
          console.log('webcam started');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    uploadBase64Image() {
      this.uploadInProgress = true;
      this.saveBase64Image(this.snapshotBase64).finally(() => {
        setTimeout(() => {
          this.uploadInProgress = false;
          alert('Image uploaded successfuly, redirecting to gallery view');
          this.$router.push({ path: '/' });
        }, 2000);
      });
    },
  },
  watch: {
    snapshotBase64() {
      // this means that a photo was taken and user wants to clear it
      if (this.snapshotBase64 === null) {
        // use nexttick to let Vue.js render webcam video html object
        this.$nextTick(() => {
          this.initWebcam();
        });
      }
    },
  },
  destroyed() {
    webcam.stop();
  },
  components: {},
};
</script>

<style scoped lang="scss">
.action-button {
  margin: 5px;
}
</style>
