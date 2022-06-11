import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import get from 'axios';
import setUserProfile from '../../redux/profileReducer';
import './Profile.css';

class ProfileContainer extends React.Component { 

  // componentDidMount() {
  //   get(`https://swapi.dev/api/people/2/`).then(response => {
  //       this.props.setUserProfile(response.data.count)
  //     }) 
  // }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({

}) 

export default connect(mapStateToProps,{
  setUserProfile
})(ProfileContainer)