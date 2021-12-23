import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount()');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount()');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = () => {
    // console.log(event);
    this.props.closeModal();
  };

  render() {
    const modalPortal = document.querySelector('#modal-root');
    console.log('Modal props', this.props);
    // const {} = this.props;

    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <h2>Privet!</h2>
          <img src="" alt="" />
        </div>
      </div>,
      modalPortal,
    );
  }
}

export default Modal;
