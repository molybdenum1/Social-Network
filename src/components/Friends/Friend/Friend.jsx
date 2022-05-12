import React from 'react';
import './Friend.css';
import userPhoto from '../../../assets/img/1299.jpg'

export default function Friend(props) {
  //console.log(props.id)
  return (
    <div className="friend-field">
      <div className="friend-left">
          <div className="friend-ava">
              <img 
              className="friend-ava-img"
              src={userPhoto} 
              alt="friend-ava"/>
          </div>
          <div className="subs-btn">
            {/* {
              props.user.followed ?
               <button onClick={() => props.unfollow(props.id)} className="s-btn">Unsubcribe</button>
              :
               <button  onClick={() => props.follow(props.id)} className="s-btn">Subcribe</button>
            } */}
              
          </div>
      </div>
      <div className="friend-right">
          BIO
        <div className="friend-bio">
            <div>{props.name}</div>
            <div>Naboo</div>
            <div>{props.user.gender}</div>
            <div>{props.user.birth_year}</div>
        </div>
      </div>
    </div>
  )
}
