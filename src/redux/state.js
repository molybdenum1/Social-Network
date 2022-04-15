const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE  = 'UPDATE-NEW-MESSAGE'; 
const ADD_MESSAGE = 'ADD-MESSAGE';

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
    if(action.type === 'ADD-POST'){
        let newPost = {
          id: 5,
          text : this.getState().postData.newPostText,
          likes : 1
        }
        this._state.postData.post.push(newPost);
        this._callSubscriber(this._state);

    } else if (action.type  === 'UPDATE-NEW-POST-TEXT'){
        this._state.postData.newPostText = action.newText;
        this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-MESSAGE'){
        this._state.dialogsData.newMessText = action.newText;
        this._callSubscriber(this._state)

    } else  if (action.type === 'ADD-MESSAGE'){
        let newMess = {
          id: 6,
          text: this.getState().dialogsData.newMessText
        }
        this._state.dialogsData.messages.push(newMess);
        this._callSubscriber(this._state);
        
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type : ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {type : UPDATE_NEW_POST_TEXT, newText: text}
}

export const addMessageActionCreator = () => {
  return {
    type : ADD_MESSAGE
  }
}

export const updateNewMessageActionCreator = (text) => {
  return {type : UPDATE_NEW_MESSAGE, newText: text}
}

export default store;
