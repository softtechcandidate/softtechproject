<template>
  <div>
    <Navbar></Navbar>
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeV',
  components: {
    Home,
    Navbar,
  },
};
</script>
