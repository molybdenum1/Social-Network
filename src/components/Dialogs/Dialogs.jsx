import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import './Dialogs.css'
import {updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';

export default function Dialogs(props) {

  let userEl = props.store.users.map( user => <Dialog id={user.id} name={user.name}/>)
  let msgEl = props.store.messages.map( msg => <Message text={msg.text}/>)

  let newMessage = React.createRef();

  let onAddMessage = () =>{
    props.addMessage();
  }

  let onChangeMessage = () => {
    let text = newMessage.current.value;
    props.changeMessage(text)
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
            <textarea name="mess" id="mess" value={props.store.newMessText} onChange={ onChangeMessage } ref={newMessage}></textarea>
            <button className="toSend" onClick={ onAddMessage }>Send</button>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
