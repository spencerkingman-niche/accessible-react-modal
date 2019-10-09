import './ModalTrigger.css'

import React from 'react'

export const ModalTrigger = ({
    buttonRef,
    onOpen,
    text
}) => <button className="btn" onClick={ onOpen } ref={ buttonRef }>{ text }</button>