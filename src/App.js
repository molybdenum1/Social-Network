
import Header from './components/Header/Header';
import Navbar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';



function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile"
                 element={<Profile 
                          store = {props.store}
                          // posts = {props.store.postData.post}
                          // newPostText = {props.store.postData.newPostText}
                          dispatch = {props.dispatch}
                          />} />
          <Route path="/dialogs/*" 
                element={<DialogsContainer 
                          store = {props.store}
                          dispatch = {props.dispatch}
                          />
                        } 
                          />
                          
        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
