const library = require("unsplash-js");
const Unsplash = library.default;

const unsplash = new Unsplash({
  accessKey: "68d0dbec0af8413446189d28979c950245128b42c373f041cce210340b48c3bd"
});
const { toJson } = library;

const getDefaultUnsplashPhotos = () =>
  new Promise((resolve, reject) => {
    unsplash.photos
      .listPhotos(2, 15, "latest")
      .then(toJson)
      .then(photos => {
        const neededPhotos = photos.map(photo => ({
          id: photo.id,
          width: photo.width,
          height: photo.height,
          alt: photo.alt_description,
          src: photo.urls.regular,
          // srcSet: photo.urls,
          links: photo.links
        }));
        resolve(neededPhotos);
      });
  });

const search = (keyword, { orientation }) =>
  new Promise((resolve, reject) => {
    unsplash.search
      .photos(
        keyword ? keyword : "",
        1,
        10,
        orientation ? { orientation } : null
      )
      .then(toJson)
      .then(photos => {
        const neededPhotos = photos.map(photo => ({
          id: photo.id,
          width: photo.width,
          height: photo.height,
          alt: photo.alt_description,
          src: photo.urls.regular,
          // srcSet: photo.urls,
          links: photo.links
        }));
        resolve(neededPhotos);
      });
  });

export { getDefaultUnsplashPhotos, search };
export default unsplash;
