import React from 'react';
import MakePost from './MakePost';
import {updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';


export default function MakePostContainer(props) {

  

  let makePost = () =>{
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    props.dispatch( updateNewPostTextActionCreator(text) );
  }

  return (
    <MakePost 
      makePost={makePost} 
      updateNewPostText={onPostChange} 
      newPostText={props.store.postData.newPostText}/>
  )
}
