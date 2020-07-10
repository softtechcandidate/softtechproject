<template>
  <div class="image-carousel">
    <b-carousel
      id="carousel-1"
      v-model="selectedSlideIndexLocal"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="(currentImage) in imageList"
        :img-src="currentImage.large"
        :key="currentImage.large"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ImageCarousel',
  props: {
    selectedSlideIndex: Number,
  },
  data: () => ({
    selectedSlideIndexLocal: 0,
  }),
  created() {
    this.selectedSlideIndexLocal = this.selectedSlideIndex;
  },
  computed: {
    ...mapState(['imageList']),
  },
  watch: {
    selectedSlideIndex() {
      this.selectedSlideIndexLocal = this.selectedSlideIndex;
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-carousel {
  // padding: 20px;
}
</style>
