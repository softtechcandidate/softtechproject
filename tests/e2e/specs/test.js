// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'gallery header is rendered': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.home')
      .assert.containsText('h1', 'Image Gallery')
      .end();
  },

  'GalleryView component rendered': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('#galleryView')
      .end();
  },

  'FileUploader component rendered': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('#fileUploader')
      .end();
  },
};
