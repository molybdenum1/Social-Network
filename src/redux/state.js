let reRenderEntireTree = () => {
  console.log("state is changed")
}

let state = {
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
                {id: 5, text: 'siemens'}]
    }
  }

window.state = state 
  
export const addPost = () => {
  let newPost = {
    id: 5,
    text :  state.postData.newPostText,
    likes : 1
  }
  state.postData.post.push(newPost);
  reRenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.postData.newPostText = newText;
  reRenderEntireTree(state);
}

export const subcribe = (observe) => {
  reRenderEntireTree = observe; 
}

export default state