<template>
  <div class="thumbnail-slider">
    <b-img-lazy
      class="thumnail-slider__thumb"
      thumbnail
      v-for="(currentImage, index) in imageList"
      :src="currentImage.thumb"
      :key="currentImage.thumb"
      @click.native="$emit('thumbSelected', index)"
    ></b-img-lazy>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ThumbnailSlider",
  props: {},
  computed: {
    ...mapState(["imageList"])
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.thumbnail-slider {
  height: 64px;
  display: flex;
  overflow-x: scroll;
}

.thumnail-slider__thumb {
  cursor: pointer;
}

.inner {
  overflow: hidden;
}
</style>
