import { Component } from 'react';
import { createPortal } from 'react-dom';
import {AiOutlineClose} from "react-icons/ai"

import styles from '../Modal/modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <button type="button" className={styles.close} onClick={close}>
            <AiOutlineClose />
          </button>

          {children}

        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;