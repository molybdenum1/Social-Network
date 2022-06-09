import Dialogs from './Dialogs';
import {updateNewMessageAC, addMessageAC } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData
  }
}

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageAC, addMessageAC
})(Dialogs);
export default  DialogsContainer;