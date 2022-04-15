const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  
    post :    [{id: 1, text: "Hi there", likes: 12 },
              {id: 2, text: "It's my second postttt", likes: 32 },
              {id: 3, text: "Wazzzzzzup", likes: 1 },],
    newPostText : 'WAZZZZZZZZZZZZZUP'

  
}


const profileReducer = (state = initialState, action) => {
    if(action.type === ADD_POST){
        let newPost = {
          id: 5,
          text : state.newPostText,
          likes : 1
        }
        state.post.push(newPost);
        state.newPostText = '';

    } else if (action.type  === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
        

    } 
    return state;
}

export const addPostActionCreator = () => {
    return {
      type : ADD_POST
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {type : UPDATE_NEW_POST_TEXT, newText: text}
  }
  

export default profileReducer;