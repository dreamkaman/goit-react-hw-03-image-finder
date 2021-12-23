// import propTypes = require("prop-types");

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { src, alt, handleShowModal } = props;

  return (
    <li className={styles.galleryItem}>
      <img className={styles.galleryItemImage} src={src} alt={alt} onClick={handleShowModal} />
    </li>
  );
};

export default ImageGalleryItem;
