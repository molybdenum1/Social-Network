import React from 'react'
import './Friend.css'

export default function Friend(props) {
  
  return (
    <div className="friend-field">
      <div className="friend-left">
          <div className="friend-ava">
              <img 
              className="friend-ava-img"
              src={props.user.avaImg} 
              alt="friend-ava"/>
          </div>
          <div className="subs-btn">
            {
              props.user.followed ?
               <button onClick={() => props.unfollow(props.user.id)} className="s-btn">Unsubcribe</button>
              :
               <button  onClick={() => props.follow(props.user.id)} className="s-btn">Subcribe</button>
            }
              
          </div>
      </div>
      <div className="friend-right">
          BIO
        <div className="friend-bio">
            <div>{props.user.fullName}</div>
            <div>{props.user.location.city + ', ' + props.user.location.country}</div>
            <div>{props.user.status}</div>
        </div>
      </div>
    </div>
  )
}
