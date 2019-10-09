import React from 'react'
import './ModalTrigger.css';

export const ModalTrigger = ({
    buttonRef,
    onOpen,
    text
}) => <button className="c-btn" onClick={ onOpen } ref={ buttonRef }>{ text }</button>