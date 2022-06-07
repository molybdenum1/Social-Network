import React from 'react';
import * as axios from 'axios';
import Friend from './Friend/Friend';
import './Friends.css';

class Friends extends React.Component {
  
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`).then(response => {
      this.props.setUsers(response.data.results)
      this.props.setTotalUsersCount(response.data.count)
    }) 
  }
  
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`).then(response => {
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
            return  this.props.currentPage === p ?  
            <span className="selectedPage" onClick={() => { this.onPageChanged(p) }}>{p}</span>
            :
            <span className="unselectedPage" onClick={() => {this.onPageChanged(p)}}>{p}</span>})
          }
        </div>
        <h1>Friends</h1>
         {
             this.props.friends.map(
               (friend) => <Friend  user={friend} id={friend.id} name={friend.name}/>)
          }
        <button className="show-more-btn">SHOW MORE</button>
      </div>
    )
  }

  
}


export default Friends