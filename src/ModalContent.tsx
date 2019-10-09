import './ModalContent.css'

import FocusTrap from 'focus-trap-react'
import React from 'react'
import ReactDOM from 'react-dom'

export const ModalContent = ({
    ariaLabel,
    buttonRef,
    content,
    modalRef,
    onClickAway,
    onClose,
    onKeyDown,
    role = 'dialog'
}) => {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside 
                className="c-modal-cover" 
                aria-label={ ariaLabel }
                aria-modal="true"
                onClick={ onClickAway }
                onKeyDown={ onKeyDown } 
                role={ role } 
                tabIndex={-1}
            >
                <div className="c-modal" ref={ modalRef }>
                    <button 
                        aria-labelledby="close-modal"
                        className="c-modal__close"
                        onClick={ onClose }
                        ref={ buttonRef }
                    >
                        <span id="close-modal" className="u-hide-visually">Close Modal</span>
                        <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
                    </button>
                    <div className="c-modal__body">
                        { content }
                    </div>
                </div>
            </aside>
        </FocusTrap>, 
        document.body
    );
}