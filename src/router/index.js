import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Camera from '../views/Camera.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
