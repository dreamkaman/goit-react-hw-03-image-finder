// import propTypes = require("prop-types");

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { id, src, alt, handleShowModal } = props;

  const handleClick = () => {
    handleShowModal(id);
  };

  return (
    <li className={styles.galleryItem}>
      <img className={styles.galleryItemImage} id={id} src={src} alt={alt} onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;
