# softtechproject

Image gallery implementation for Softtech's job interview. Both FE and BE implementations included in this repository. 

## Project setup
```
npm install
```
## How to run
```
# note that both BE and FE instances must be running to use the app

npm run serve:fe; #starts dev server for UI
npm run serve:be; 

npm run test:unit; 
npm run test:e2e;
```

# Design notes
## FE implementaion
* Implementation on FE side is done with vue and vuex.
* Image upload feature is implemented e2e. New image is posted by FE and stored by BE. Newly uploaded image can be seen on gallery.
* Image upload by webcam snapshot is implemented e2e. It is validated on desktop, but could not be validated on mobile devices. 
* Image upload by webcam snapshot feature is also available for desktop devices.
* Image upload by file selection feature is validated on mobile devices.
* Each component is designed to be reusable. They are not tightly coupled. Communication between components are done with events & props. See communication between `GalleryView` ➡️ `ImageCarousel` and `GalleryView` ⬅️ `ThumbnailSlider`.
* ImageList data (a JSON dat contains urls of images) is stored in vuex in order to let multiple components to use same data. Vuex actions and mutations are used properly. 
* A separate **serverConnectors** layer is designed to manage the communication with BE. If communication protocol changes in feature (like moving to webSocket) only serverConnector classes will be effected. The rest of the implementation will remain same.
* Vue.js lifecycle hooks are used carrefully in order to avoid memory leaks. (see, `Camera.vue` destroyed hook)
* Promises are widely used to handle async operations. Loading indicators are also added during time consuming operations.
* Components that enables lazy-loading features are used in `ThumbnailSlider` component.
* Implementations for unit test and e2e test are added. 
* Device screen orientation changes are handles.
* Upload image types are restricted to png or jpg.

## BE implementation
* A simple http server implementation is done with nodejs and express.
* Both image resources and imageList data json are served by BE.
* main.js is designed to include HTTP server configurations.
* Bussines logic implemention (like retriving imageList data, adding new image) is seperated and placed into `GalleryManager` class. 
* If communication techonology changes in future, `GalleryManager` class will not be effected. 
* Currently a simple JSON file read/write approach is used to store persistent data but, file operations are only implemented in `DataStorageManager` class and can easily be converted to a DB connector without changing the rest of the code. 
* A thumbnail generator is also implemented on BE side.

## Third party libraries
* Project was initialized by vue-cli tool with an boilerplate configuration. This configuration included e2e, unit test, dev server, eslint and some other setups.
* Bootstrap-vue lib is used as the component library.
* Webcam-easy lib is used to handle camera related operations.
* Vuex is used as centralized store.
* BE implementation is done with nodejs and express.

# Further Improvement ideas
* SCSS variables should be used to define same padding for example. 
* Image size validation should be added.
* Generating thumbnail on clientside may be considered to avoid too much CPU usage on serverside.
* Webcam support should be validated on mobile devices. 
* The gallery handles responsivity to some extend but it should be a implemented as a full screen web app. Currently, users may need to scroll down on mobile devices in landscape mode.
* Pagination may be added to be able to support a gallery which has too many images.
* Single file upload is currently implemented for ease of implementation, multiple file upload support should be added.
* A DB should be used on BE side.
