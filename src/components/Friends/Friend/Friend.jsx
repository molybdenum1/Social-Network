import React from 'react'
import './Friend.css'

export default function Friend(props) {
  return (
    <div className="friend-field">
      <div className="friend-left">
          <div className="friend-ava">
              <img 
              className="friend-ava-img"
              src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" 
              alt="friend-ava"/>
          </div>
          <div className="subs-btn">
              <button className="s-btn">Subcribe</button>
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
