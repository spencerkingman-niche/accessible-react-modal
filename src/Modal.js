import React, { Component } from 'react'
import { ModalContent } from './ModalContent'
import { ModalTrigger } from './ModalTrigger'

export class Modal extends Component {
    render() {
        const { triggerText } = this.props
        return (
            <div>

            <ModalTrigger text={ triggerText }/>
            <ModalContent/>
            </div>
        )
    }
}