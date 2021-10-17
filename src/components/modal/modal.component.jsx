import React from 'react'

import './modal.styles.scss'

const Modal = ({ children, onClick, backdropdismiss = false }) => {
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
            onClick={() => onClick()}
          >X</span>
        </div>
        <div className="modal-body">
          { children }
        </div>
        {/* <div className="modal-footer">
        </div> */}
      </div>
    </div>
  )
}

export default Modal
