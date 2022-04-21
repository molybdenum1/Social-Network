import MakePost from './MakePost';
import {updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postData: state.postData 
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    makePost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
     dispatch( updateNewPostTextActionCreator(text) );
    }
  }
}

const MakePostContainer = connect(mapStateToProps, mapDispatchToProps)(MakePost);
export default  MakePostContainer;