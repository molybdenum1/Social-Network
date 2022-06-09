import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalCountAC, setSetIsFetchingAC } from '../../redux/friendsReducer';
import React from 'react';
import * as axios from 'axios';
import Friends from './Friends';
import loader from '../../assets/svg/ball-triangle.svg';
import './Friends.css';


class FriendsC extends React.Component {
  
    constructor(props){
      super(props);
      this.componentDidMount = this.componentDidMount.bind(this);
    }
  
    componentDidMount() {
      this.props.setSetIsFetching(true)
      axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`).then(response => {
        this.props.setSetIsFetching(false)
        this.props.setUsers(response.data.results)
        this.props.setTotalUsersCount(response.data.count)
      }) 
    }
    
    onPageChanged = (p) => {
      this.props.setSetIsFetching(true);
      this.props.setCurrentPage(p);
      axios.get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`).then(response => {
        this.props.setSetIsFetching(false)
        this.props.setUsers(response.data.results)
      }) 
    }
  
    render() {
   
     
  
      return (
        <>
          { this.props.isFetching ? <img src={loader}/> : null }
          <Friends state={this.props} onPageChanged={this.onPageChanged}/>
        </>
      )
    }
  
    
  }

let mapStateToProps = (state) => {
    return{
        friends: state.friendsData.friends,
        pageSize: state.friendsData.pageSize,
        totalUserCount: state.friendsData.totalUserCount,
        currentPage: state.friendsData.currentPage,
        isFetching : state.friendsData.isFetching,
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
        },
        setSetIsFetching: (isFetching) => {
          dispatch(setSetIsFetchingAC(isFetching));
      },
    }
}

const friendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsC);
export default friendsContainer;