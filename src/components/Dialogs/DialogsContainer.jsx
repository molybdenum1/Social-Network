import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

export default function DialogsContainer(props) {



  return (
    <StoreContext.Consumer>
      {
        
        (store) => {
          
          let state = store.getState().dialogsData;

          let addMessage = () =>{
            store.dispatch(addMessageActionCreator())
          }

          let changeMessage = (text) => {
            store.dispatch( updateNewMessageActionCreator(text) );
          }
          return (
            <Dialogs addMessage={addMessage} changeMessage={changeMessage} store={state} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}
