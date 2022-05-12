import React from 'react';
import * as axios from 'axios';
import Friend from './Friend/Friend';
import './Friends.css';

class Friends extends React.Component {
  
  componentDidMount() {
    //console.log('aaaa')
    axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`).then(response => {
      //console.log(response.data.results)
      this.props.setUsers(response.data.results)
    }) 
  }
  
  render() {
    //console.log('debug')
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }

    return (
      <div>
        <div>
          {
            pages.map(p => {
            return  this.props.currentPage === p ?  <span className="selectedPage">{p}</span>:<span>{p}</span>})
          }
        </div>
        <h1>Friends</h1>
         {
            this.props.friends[0].map(
              (friend) => <Friend follow={this.props.follow} unfollow={this.props.unfollow} user={friend} id={friend.id} name={friend.name}/>)
         }
        <button className="show-more-btn">SHOW MORE</button>
      </div>
    )
  }

  
}


export default Friends