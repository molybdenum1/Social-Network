import React from 'react'
import './MakePost.css';

export default function MakePost() {

  let newPostElement = React.createRef();

  let addPost = () =>{
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <div>
        <textarea className="make-post-area" ref={ newPostElement }/>
      </div>
      <div>
        <input className="make-post-btn" type="submit" value="Add Post" onClick={addPost}/>
      </div>
    </div>
  )
}
