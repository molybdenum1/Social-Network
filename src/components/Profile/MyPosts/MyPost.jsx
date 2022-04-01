import React from 'react';
import './MyPost.css';
import Post from './Post/Post';

export default function MyPost() {
  return (
    <div>
          <h2>MY POSTS</h2>
          <h3>SEND</h3>
          <div>
            <textarea/>
          </div>
          <div>
            <input type="submit" value="SEND"/>
          </div>
          <h3>POSTS</h3>
          <Post message="Hi there"/>
          <Post message="It's my first post"/>
         
    </div>
  )
}
