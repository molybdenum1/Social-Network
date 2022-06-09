import MakePost from './MakePost';
import {updateNewPostTextAC, addPostAC } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postData: state.postData 
  }
}

const MakePostContainer = connect(mapStateToProps, {
  updateNewPostTextAC, addPostAC
})(MakePost);

export default  MakePostContainer;