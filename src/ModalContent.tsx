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
    // ReactDOM.createPortal() allows us to render an element outside of where it's being consumed.
    // The first argument is the component to render,
    // and second argument is the DOM node we want to attach it to.
    // We want it appended to the end of document.body
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                className="modal-cover"
                // One way to provide the WAI-ARIA label.
                // Use this if there isn't a child HTMLElement that
                // already contains the label you want.
                // See line 51.
                aria-label={ariaLabel}
                // aria-modal indicates that not only is this component a modal element,
                // but it explains that the user's interaction is limited to the contents
                // of the element. Screen readers should then take this information to
                // determine whether or not to set focus immediately to the element,
                // depending on if focus has already been hijacked.
                aria-modal="true"
                onClick={onClickAway}
                onKeyDown={onKeyDown}
                // Since there is no HTML element for "Modal", we have to take one that
                // already exists (like <aside/>) and specify the role with a tag.
                // Most modals should get the role 'dialog'. If the modal requires the
                // user's immediate attention, it should get the role 'alertdialog'.
                role={role}
                // By using tabindex="-1", we tell the browser that we do not want this
                // to be ordered in the "sequential focus navigation" as we will be handling
                // this ourselves using JavaScript.
                tabIndex={-1}
            >
                <div className="modal" ref={modalRef}>
                    <button
                        // The other way to provide the WAI-ARIA label.
                        // Use this if there is a child element that already
                        // has the text you want to use for the label,
                        // so that can be the source-of-truth.
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
