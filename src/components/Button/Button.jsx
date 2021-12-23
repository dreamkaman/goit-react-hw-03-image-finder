import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  return (
    <button className={styles.loadMoreBtn} type="button" onClick={props.onClick}>
      {/* onClick={this.props.onClick} */}
      Load more
    </button>
  );
};

export default Button;
