import React from 'react';
import Friend from './Friend/Friend';
import './Friends.css';

export default function Friends(props) {


  let pagesCount = Math.ceil(props.state.totalUserCount /props.state.pageSize);
    
  let pages = [];
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
  
  return (
    <div>
        <div>
          {
            pages.map(p => {
            return   props.state.currentPage === p ?  
            <span className="selectedPage" onClick={() => { props.onPageChanged(p) }}>{p}</span>
            :
            <span className="unselectedPage" onClick={() => {props.onPageChanged(p)}}>{p}</span>})
          }
        </div>
        <h1>Friends</h1>
         {
             props.state.friends.map(
               (friend) => <Friend  user={friend} id={friend.id} name={friend.name}/>)
          }
        <button className="show-more-btn">SHOW MORE</button>
      </div>
  )
}
