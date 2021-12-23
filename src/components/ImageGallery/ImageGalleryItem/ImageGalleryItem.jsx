// import propTypes = require("prop-types");

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { src, alt } = props;

  return (
    <li className={styles.galleryItem}>
      <img className={styles.galleryItemImage} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
