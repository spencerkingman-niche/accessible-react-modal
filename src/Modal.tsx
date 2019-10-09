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
    modalNode: any
    openButtonNode: any
    closeButtonNode: any

    state = { isOpen: false }

    onClickAway = (e: MouseEvent) => {
        if (this.modalNode && this.modalNode.contains(e.target)) return
        this.onClose()
    }

    onClose = () => {
        this.setState({ isOpen: false })
        this.openButtonNode.focus()
        this.toggleScrollLock()
    }

    onOpen = () => {
        this.setState({ isOpen: true }, () => {
            this.closeButtonNode.focus()
        })
        this.toggleScrollLock()
    }

    onKeyDown = ({ keyCode }: KeyboardEvent) => keyCode === 27 && this.onClose()

    toggleScrollLock = () =>
        typeof document !== 'undefined' &&
        // @ts-ignore
        document.querySelector('html').classList.toggle('u-lock-scroll')

    render() {
        const { isOpen } = this.state
        const { ariaLabel, children, role, triggerText } = this.props
        return (
            <Fragment>
                <ModalTrigger
                    buttonRef={(n: any) => (this.openButtonNode = n)}
                    onOpen={this.onOpen}
                    text={triggerText}
                />
                {isOpen && (
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
