import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
   _state : {
      postData : {
        post :    [{id: 1, text: "Hi there", likes: 12 },
                  {id: 2, text: "It's my second postttt", likes: 32 },
                  {id: 3, text: "Wazzzzzzup", likes: 1 },],
        newPostText : 'WAZZZZZZZZZZZZZUP'

      },
      dialogsData : {
        users : [{id: 1, name: 'Den4ik'},
                {id: 2, name: 'Tom Holland'},
                {id: 3, name: 'Andrew Garfield'},
                {id: 4, name: 'Toby Maguire'}],
    
        messages : [{id: 1, text: 'hi there'},
                  {id: 2, text: 'wazzzzzzup'},
                  {id: 3, text: 'cooooooooo0l'},
                  {id: 4, text: 'SuuuuuuuuuuS'},
                  {id: 5, text: 'siemens'}],
        
        newMessText : ''
      }
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state is changed")
  },
  subcribe(observe) {
    this._callSubscriber = observe; 
  },


  dispatch(action) {
    this._state.postData    = profileReducer(this._state.postData, action);
    this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);

    this._callSubscriber(this._state);
  
  }
}



export default store;
