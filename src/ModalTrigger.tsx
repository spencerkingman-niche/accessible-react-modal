import './ModalTrigger.css'

import React from 'react'

interface IProps {
    buttonRef: any
    onOpen: () => void
    text: string
}

export const ModalTrigger = ({ buttonRef, onOpen, text }: IProps) => (
    <button className="btn" onClick={onOpen} ref={buttonRef}>
        {text}
    </button>
)
