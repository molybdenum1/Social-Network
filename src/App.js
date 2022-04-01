
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
     <div>
      <Header/>
     </div>
     <div>
      <Navbar/>
     </div>
      <div>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
