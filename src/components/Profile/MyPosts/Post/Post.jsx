import React from 'react'
import './Post.css'

export default function Post(props) {
  return (
    <div className="post">
        <div className="img">
          <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt=""/>
        </div>
        <div className="message">
         <span>{props.message}</span>
       </div>
    </div>
  )
}
