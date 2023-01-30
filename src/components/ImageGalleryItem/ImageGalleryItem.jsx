import styles from '../ImageGalleryItem/image-gallery-item.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
  return (
    <li
      className={styles.imageGalleryItem}
      onClick={() => onClick(largeImageURL, tags)}
    >
      <img src={webformatURL} alt={tags} className={styles.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

