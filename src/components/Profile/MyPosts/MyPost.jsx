import React from 'react';
import './MyPost.css';
import Post from './Post/Post';
import MakePost from './MakePost/MakePost';

export default function MyPost(props) {

  return (
    <div>
          <h2>MY POSTS</h2>
          <h3>SEND</h3>
          <MakePost/>
          <h3>POSTS</h3>
          {props.posts.map( post => <Post post= {post.text} like= {post.likes} id= {post.id}/> )}
         
    </div>
  )
}
