import React from 'react';
import './MyPost.css';
import Post from './Post/Post';
import MakePostContainer from './MakePost/MakePostContainer';
import StoreContext from '../../../StoreContext';

export default function MyPost(props) {

  return (
    <StoreContext.Consumer>
      {
        
        (store) => {
          
          return(
            <div>
            <h2>MY POSTS</h2>
            <h3>SEND</h3>
            <MakePostContainer
              store = {store.getState()} 
              dispatch = {props.dispatch}
            />
            <h3>POSTS</h3>
            {store.getState().postData.post.map( 
              post => <Post post= {post.text} like= {post.likes} id= {post.id}/> 
              )}
         
          </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
}
