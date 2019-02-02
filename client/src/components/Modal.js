import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const { title, content, actions, onClick } = props;
  return ReactDOM.createPortal(
    <div 
      className="ui dimmer modals visible active"
      onClick={onClick} >
      <div 
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}>
          <div className="header">
            {title}
          </div>
          <div className="content">
            {content}
          </div>
          <div className="actions">
            {actions}
          </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
