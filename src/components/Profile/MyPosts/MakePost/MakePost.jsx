<<<<<<< HEAD
import React from 'react';
import './MakePost.css';
import {updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';


export default function MakePost(props) {

  let newPostElement = React.createRef();

  let makePost = () =>{
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( updateNewPostTextActionCreator(text) );
  }

  return (
    <div>
      <div>
        <textarea 
        className="make-post-area" 
        value={ props.newPostText }
        onChange={ onPostChange } 
        ref={ newPostElement }/>
      </div>
      <div>
        <input className="make-post-btn" type="button" value="Add Post" onClick={ makePost }/>
      </div>
    </div>
  )
}
=======
import React from 'react';
import './MakePost.css';
import {updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/state';


export default function MakePost(props) {

  let newPostElement = React.createRef();

  let makePost = () =>{
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( updateNewPostTextActionCreator(text) );
  }

  return (
    <div>
      <div>
        <textarea 
        className="make-post-area" 
        value={ props.newPostText }
        onChange={ onPostChange } 
        ref={ newPostElement }/>
      </div>
      <div>
        <input className="make-post-btn" type="button" value="Add Post" onClick={ makePost }/>
      </div>
    </div>
  )
}
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
