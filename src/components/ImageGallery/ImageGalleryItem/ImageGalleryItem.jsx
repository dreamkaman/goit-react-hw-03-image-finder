// import propTypes = require("prop-types");

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { src, alt, handleShowModal } = props;

  this.onClick = () => {
    handleShowModal();
  };

  return (
    <li className={styles.galleryItem}>
      <img className={styles.galleryItemImage} src={src} alt={alt} onClick={this.onClick} />
    </li>
  );
};

export default ImageGalleryItem;
