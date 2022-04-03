import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Dialogs.css'

export default function Dialogs() {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className="dialogs">
        <div className="dialogs-item">
          <Dialog id="1" name="Denchick"/>
          <Dialog id="2" name="Tom Holland"/>
          <Dialog id="3" name="Andrew Garfield"/>
        </div>
        <div className="messages">
          <Message text="hi there"/>
          <Message text="wazzzzzzup"/>
          <Message text="cooooooooo0l"/>
        </div>
      </div>
      
    </div>
  )
}
