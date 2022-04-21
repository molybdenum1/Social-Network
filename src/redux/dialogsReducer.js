const UPDATE_NEW_MESSAGE  = 'UPDATE-NEW-MESSAGE'; 
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  
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

export const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {...state}
    if (action.type === UPDATE_NEW_MESSAGE){
        stateCopy.newMessText = action.newText;

    }else  if (action.type === ADD_MESSAGE){
        let newMess = {
          id: 6,
          text: stateCopy.newMessText
        }
        stateCopy.messages = [...state.messages, newMess];
        stateCopy.newMessText = '';
    }

    return stateCopy;
}


export const addMessageActionCreator = () => {
    return {
      type : ADD_MESSAGE
    }
  }
  
export const updateNewMessageActionCreator = (text) => {
    return {type : UPDATE_NEW_MESSAGE, newText: text}
  }

export default dialogsReducer;