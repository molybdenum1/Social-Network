import React from 'react';
import './MyPost.css';
import Post from './Post/Post';
import MakePostContainer from './MakePost/MakePostContainer';


export default function MyPost(props) {

  return (
    <div>
            <h2>MY POSTS</h2>
            <h3>SEND</h3>
            <MakePostContainer/>
            <h3>POSTS</h3>
            {
              props.store.getState().postData.post.map(
                post => <Post post = {post.text} like= {post.likes} key={post.id} id= {post.id}/> 
              )
            }
         
          </div>
  )
}
