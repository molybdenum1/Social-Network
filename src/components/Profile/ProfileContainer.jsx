import React from 'react';
import MyPost from './MyPosts/MyPost';
import ProfileDesc from './ProfileDesc/ProfileDesc';
import './Profile.css';

class ProfileContainer extends React.Component { 

  render() {
    return (
      <div className='content'>
        <h2>Main content</h2>
          <div>
            <img className="back-img" src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/sunset-i5148.jpg"  height="100px"width="1080px"/>
          </div>
          <h2>MY PROFILE</h2>
          <h3>About</h3>
          <ProfileDesc/>
          <MyPost 
          store = {props.store}
          />
          
      </div>
    )
  }
}
export default ProfileContainer