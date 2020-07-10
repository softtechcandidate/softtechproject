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
  data: () => ({
    selectedSlideIndex: 0,
  }),
  methods: {
    onThumbSelected(selectionIndex) {
      this.selectedSlideIndex = selectionIndex;
    },
  },
  components: { ThumbnailSlider, ImageCarousel },
};
</script>

<style scoped lang="scss">
.gallery-view {
  margin: 10px;
}
.thumbnail-slider {
  margin-top: 10px;
}
</style>
