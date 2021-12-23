// import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

// import { photosApi } from '../../shared/services/photos';

const ImageGallery = ({ gallery, onShowModal }) => {
  // state = { gallery: null };

  //   console.log(this.props);

  //   searchPhotos = ((_page = 1), q);
  // const show = (!!this.state.gallery.length && "Hallo!");
  //  let elements = ``;

  // componentDidMount() {
  //   photosApi.searchPhotos((_page = 1), q);
  // }
  console.log('gallery - ', gallery);

  const elements = gallery.map(image => {
    return (
      <ImageGalleryItem
        key={image.id}
        src={image.webformatURL}
        alt={image.tags}
        handleShowModal={onShowModal}
      />
    );
    // return `<li key=${image.id}><img src='${image.previewURL}' alt='${image.tags}'/></li>`;
  });

  return <ul className={styles.gallery}>{!!gallery.length && elements}</ul>;
};

export default ImageGallery;
