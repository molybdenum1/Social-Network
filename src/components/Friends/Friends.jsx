import React from 'react';
import * as axios from 'axios';
import Friend from './Friend/Friend';
import './Friends.css';

export default function Friends(props) {


  if(props.friends.length === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            //console.log(response.data)
            props.setUsers(response.data.items)
          })
    
  }
 console.log( props.friends[1])

   
  return (
    <div>
      <h1>Friends</h1>
       {
            props.friends.map((friend) => <Friend follow={props.follow} unfollow={props.unfollow} user={friend} id={friend.id} name={friend.name}/>)
       }
      <button className="show-more-btn">SHOW MORE</button>
    </div>
  )
}
