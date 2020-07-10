<template>
  <div class="gallery-view">
    <ImageCarousel :selectedSlideIndex="selectedSlideIndex"></ImageCarousel>
    <ThumbnailSlider @thumbSelected="onThumbSelected"></ThumbnailSlider>
  </div>
</template>

<script>
import ImageCarousel from './ImageCarousel.vue';
import ThumbnailSlider from './ThumbnailSlider.vue';

export default {
  name: 'GalleryView',
  props: {},
  data: () => ({
    selectedSlideIndex: 0,
  }),
  computed: {},
  methods: {
    onThumbSelected(selectionIndex) {
      this.selectedSlideIndex = selectionIndex;
    },
  },
  components: { ThumbnailSlider, ImageCarousel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gallery-view {
  margin: 10px;
}
.thumbnail-slider {
  margin-top: 10px;
}
</style>
