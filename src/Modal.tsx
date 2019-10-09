import React, { Component, Fragment, MouseEvent } from 'react'

import { ModalContent } from './ModalContent'
import { ModalTrigger } from './ModalTrigger'

export class Modal extends Component {
    modalNode: any
    closeButtonNode: any
    openButtonNode: any

    state = { isOpen: false }
    
    onClickAway = (e: MouseEvent) => {
        if (this.modalNode && this.modalNode.contains(e.target)) return;
        this.onClose();
    };

    onClose = () => {
        this.setState({ isOpen: false })
        this.openButtonNode.focus()
        this.toggleScrollLock();
    }

    onOpen = () => {
        this.setState({ isOpen: true }, () => {
            this.closeButtonNode.focus()
        })
        this.toggleScrollLock();
    }

    onKeyDown = ({ keyCode }) => keyCode === 27 && this.onClose()

    toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

    render() {
        const { isOpen } = this.state
        const { ariaLabel, children, role, triggerText } = this.props
        return (
            <Fragment>
                <ModalTrigger
                    buttonRef={ n => this.openButtonNode = n }
                    onOpen={ this.onOpen }
                    text={ triggerText }
                />
                { isOpen && 
                    <ModalContent
                        ariaLabel={ ariaLabel }
                        buttonRef={ n => this.closeButtonNode = n }
                        content={ children }
                        modalRef={ n => this.modalNode = n }
                        onClickAway={ this.onClickAway }
                        onClose={ this.onClose }
                        onKeyDown={ this.onKeyDown }
                        role={ role }
                    />
                }
            </Fragment>
        )
    }
}