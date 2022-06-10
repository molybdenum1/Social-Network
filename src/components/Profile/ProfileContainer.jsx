import React from 'react';
import Profile from './Profile';
import './Profile.css';

class ProfileContainer extends React.Component { 

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}
export default ProfileContainer