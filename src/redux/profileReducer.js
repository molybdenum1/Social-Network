const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  
    post :    [{id: 1, text: "Hi there", likes: 12 },
              {id: 2, text: "It's my second postttt", likes: 32 },
              {id: 3, text: "Wazzzzzzup", likes: 1 },],
    newPostText : ''

}


const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state};
    
  if(action.type  === UPDATE_NEW_POST_TEXT){
      
      stateCopy.newPostText = action.newText;
      
    } else if (action.type === ADD_POST){
        
        stateCopy.post = [...state.post, {id: 4, text : stateCopy.newPostText ,likes : 1}];
        stateCopy.newPostText = '';
         
    }
   
    return stateCopy;
    
}

export const addPostAC = () => {
    return {
      type : ADD_POST
    }
  }
  
export const updateNewPostTextAC= (text) => {
    return {type : UPDATE_NEW_POST_TEXT, newText: text}
  }
  

export default profileReducer;