import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Dialogs.css'

export default function Dialogs(props) {

  let userEl = props.dialogs.users.map( user => <Dialog id={user.id} name={user.name}/>)
  let msgEl = props.dialogs.messages.map( msg => <Message text={msg.text}/>)

  return (
    <div>
      <h1>Dialogs</h1>
      <div className="dialogs">
        <div className="dialogs-item">
          {userEl}
        </div>
        <div className="messages">
          {msgEl}
        </div>
      </div>
      
    </div>
  )
}
