import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('Title is rendered', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).to.include('Image Gallery');
  });
  it('Gallery view component rendered', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('#galleryView').exists()).equals(true);
  });
  it('File uploader component rendered', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('#fileUploader').exists()).equals(true);
  });
});
