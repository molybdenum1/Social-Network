import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.css'
import {updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';

export default function Dialogs(props) {

  let userEl = props.dialogs.users.map( user => <Dialog id={user.id} name={user.name}/>)
  let msgEl = props.dialogs.messages.map( msg => <Message text={msg.text}/>)

  let newMessage = React.createRef();

  let addMessage = () =>{
    props.dispatch(addMessageActionCreator())
  }

  let changeMessage = () => {
    let text = newMessage.current.value;
    props.dispatch( updateNewMessageActionCreator(text) );
  }


  return (
    <div>
      <h1>Dialogs</h1>
      <div className="dialogs">
        <div className="dialogs-item">
          {userEl}
        </div>
        <div className="messages">
          {msgEl}
          <div className="add-mess">
            <textarea name="mess" id="mess" value={props.newMessText} onChange={ changeMessage } ref={newMessage}></textarea>
            <button className="toSend" onClick={ addMessage }>Send</button>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
