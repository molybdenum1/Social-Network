import { connect } from 'react-redux';
import { follow, setUser, unfollow,
   setCurrentPage, setTotalCount, setSetIsFetching } from '../../redux/friendsReducer';
import React from 'react';
import get from 'axios';
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
      
      get(`https://swapi.dev/api/people/`).then(response => {
        console.log(response.data.results)
        this.props.setSetIsFetching(false)
        this.props.setUser(response.data.results)
        this.props.setTotalCount(response.data.count)
      }) 
    }
    
    onPageChanged = (p) => {
      this.props.setSetIsFetching(true);
      this.props.setCurrentPage(p);
      get(`https://swapi.dev/api/people/`).then(response => {
        this.props.setSetIsFetching(false)
        this.props.setUser(response.data.results)
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


const friendsContainer = connect(mapStateToProps, 
  {
    follow, unfollow, setUser, setCurrentPage, setTotalCount, setSetIsFetching
  }
  )(FriendsC);
export default friendsContainer;