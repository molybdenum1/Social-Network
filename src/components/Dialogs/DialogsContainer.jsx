import Dialogs from './Dialogs';
import {updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessage: (text) => {
      dispatch( updateNewMessageActionCreator(text) );
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default  DialogsContainer;