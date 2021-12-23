import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

class Modal extends Component {
  render() {
    const modalPortal = document.querySelector('#modal-root');

    const {} = this.props;

    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalPortal,
    );
  }
}

export default Modal;
