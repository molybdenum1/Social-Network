
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';



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
                          posts = {props.data.postData.post}
                          newPostText = {props.data.postData.newPostText}
                          dispatch = {props.dispatch}
                          />} />
          <Route path="/dialogs/*" 
                element={<Dialogs 
                          dialogs = {props.data.dialogsData}/>} 
                          />
                          
        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
