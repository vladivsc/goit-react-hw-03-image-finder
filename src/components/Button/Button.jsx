import styles from '../Button/button.module.scss'

const Button = ({ onLoadMore, text }) => {
  return (
    <button
      onClick={() => onLoadMore()}
      type="button"
      className={styles.buttonLoadMore}
    >
      {text}
    </button>
  );
};

export default Button;
