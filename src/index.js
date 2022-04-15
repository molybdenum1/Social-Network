import store from './redux/reduxStore';
import subscribe from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let reRenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
      data={ store.getState() } 
      dispatch={ store.dispatch.bind(store) } 
       />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
reRenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

