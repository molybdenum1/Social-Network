<<<<<<< HEAD
import store from './redux/reduxStore';
import subscribe from 'redux';
=======
import state, { subcribe } from './redux/state'
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {addPost, updateNewPostText} from './redux/state';



let reRenderEntireTree = (state) => {
<<<<<<< HEAD
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
      data={ store.getState() } 
      dispatch={ store.dispatch.bind(store) } 
       />
=======
  ReactDOM.render(
    <React.StrictMode>
      <App 
      data={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText} />
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
<<<<<<< HEAD
reRenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
=======
reRenderEntireTree(state)
subcribe(reRenderEntireTree);
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

