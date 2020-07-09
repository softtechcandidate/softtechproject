<template>
  <div>
    <Navbar></Navbar>
    <Camera />
  </div>
</template>

<script>
import Camera from '@/components/Camera.vue';
import Navbar from "@/components/Navbar";

export default {
  name: 'CameraV',
  components: {
    Camera,
    Navbar,
  },
};
</script>
