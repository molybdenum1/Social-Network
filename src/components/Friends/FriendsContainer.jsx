import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalCountAC } from '../../redux/friendsReducer';
import React from 'react';
import * as axios from 'axios';
import Friends from './Friends';
import './Friends.css';


class FriendsC extends React.Component {
  
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
   
     
  
      return (
        <Friends state={this.props} onPageChanged={this.onPageChanged}/>
      )
    }
  
    
  }

let mapStateToProps = (state) => {
    return{
        friends: state.friendsData.friends,
        pageSize: state.friendsData.pageSize,
        totalUserCount: state.friendsData.totalUserCount,
        currentPage: state.friendsData.currentPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));;
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users)); 
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
    }
}

const friendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsC);
export default friendsContainer;