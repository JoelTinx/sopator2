import React from 'react'

import './modal.styles.scss'
import '../../utils.scss'

const Modal = ({ children, onCloseClick, onOkClick, backdropdismiss = false }) => {
  const handleBackdropdissmis = (hasbackdrop) => {
    if (!hasbackdrop) return;
    onClick();
  }
  return (
    <div
      className="modal"
      onClick={() => handleBackdropdissmis(backdropdismiss)}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span
            onClick={() => onCloseClick()}
          >X</span>
        </div>
        <div className="modal-body">
          { children }
        </div>
        <div className="modal-footer">
          <button className='btn btn-success' onClick={() => onOkClick()}>
            Copiar solución y cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
