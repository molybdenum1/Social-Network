import React from 'react'
import './Post.css'

export default function Post(props) {
  return (
    <div className="post">
        <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt=""/>
       <div className="message">{props.message}</div>
    </div>
  )
}
