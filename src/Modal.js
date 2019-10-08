import React, { Component, Fragment } from 'react'
import { ModalContent } from './ModalContent'
import { ModalTrigger } from './ModalTrigger'

export class Modal extends Component {
    state = { isOpen: false }
    
    render() {
        const { triggerText } = this.props
        return (
            <Fragment>
                <ModalTrigger text={ triggerText }/>
                <ModalContent/>
            </Fragment>
        )
    }
}