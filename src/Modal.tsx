import React, { Component, Fragment, KeyboardEvent, MouseEvent } from 'react'

import { ModalContent } from './ModalContent'
import { ModalTrigger } from './ModalTrigger'

interface IProps {
    ariaLabel: string
    role?: string
    triggerText: string
}

interface IState {
    isOpen: boolean
}

export class Modal extends Component<IProps, IState> {
    // I couldn't figure out how to correctly type these callback refs.
    modalNode: any
    openButtonNode: any
    closeButtonNode: any

    state = { isOpen: false }

    onClickAway = (e: MouseEvent) => {
        // If the "clickAway" was actually within the modal, return without closing the modal. 
        if (this.modalNode && this.modalNode.contains(e.target)) {
            return
        }
        this.onClose()
    }

    onClose = () => {
        this.setState({ isOpen: false })
        this.openButtonNode.focus()
        this.toggleScrollLock()
    }

    onOpen = () => {
        this.setState({ isOpen: true }, () => {
            // We have to focus the closeButton in a callback to make sure it
            // actually exists when we call focus()
            this.closeButtonNode.focus()
        })
        this.toggleScrollLock()
    }

    // 27 is the Esc key
    onKeyDown = ({ keyCode }: KeyboardEvent) => keyCode === 27 && this.onClose()

    toggleScrollLock = () =>
        typeof document !== 'undefined' &&
        // @ts-ignore
        document.querySelector('html').classList.toggle('u-lock-scroll')

    render() {
        const { isOpen } = this.state
        const { ariaLabel, children, role, triggerText } = this.props
        // Using react.Fragment here prevents the use of a meaningless div wrapper.
        // Fragment will allow react to render, but won't add div wrapper noise to the HTML.
        return (
            <Fragment>
                <ModalTrigger
                    buttonRef={(n: any) => (this.openButtonNode = n)}
                    onOpen={this.onOpen}
                    text={triggerText}
                />
                {// When the modal is not opened it is not rendered into the DOM
                isOpen && (
                    <ModalContent
                        ariaLabel={ariaLabel}
                        buttonRef={(n: any) => (this.closeButtonNode = n)}
                        content={children}
                        modalRef={(n: any) => (this.modalNode = n)}
                        onClickAway={this.onClickAway}
                        onClose={this.onClose}
                        onKeyDown={this.onKeyDown}
                        role={role}
                    />
                )}
            </Fragment>
        )
    }
}
