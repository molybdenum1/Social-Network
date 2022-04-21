import React from 'react';
import Friend from './Friend/Friend';
import './Friends.css';

export default function Friends(props) {
    
    let userEl =  props.friends.map(user => <Friend user={user}/>)
    console.log(props.friends)
    return (
    <div>
      <h1>Friends</h1>
       {
            userEl
       }
      <button className="show-more-btn">SHOW MORE</button>
    </div>
  )
}
