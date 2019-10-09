import './ModalContent.css'

import FocusTrap from 'focus-trap-react'
import React, { KeyboardEvent, MouseEvent } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
    ariaLabel?: string
    buttonRef: any
    content: any
    modalRef: any
    onClickAway: (e: MouseEvent) => void
    onClose: () => void
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void
    role?: string
}

export const ModalContent = ({
    ariaLabel,
    buttonRef,
    content,
    modalRef,
    onClickAway,
    onClose,
    onKeyDown,
    role = 'dialog',
}: IProps) => {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                className="modal-cover"
                aria-label={ariaLabel}
                aria-modal="true"
                onClick={onClickAway}
                onKeyDown={onKeyDown}
                role={role}
                tabIndex={-1}
            >
                <div className="modal" ref={modalRef}>
                    <button
                        aria-labelledby="close-modal"
                        className="modal__close"
                        onClick={onClose}
                        ref={buttonRef}
                    >
                        <span id="close-modal" className="u-hide-visually">
                            Close Modal
                        </span>
                        <svg className="modal__close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
                        </svg>
                    </button>
                    {/*
                    *   This is where you can insert generic content.
                    *   In our case, this would be ModalStore.modalContent.
                    */}
                    <div className="modal__body">{content}</div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    )
}
