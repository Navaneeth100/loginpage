import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componens/Home';
import Login from './componens/Login';
import Register from './componens/Register';
import LandingPage from './componens/LandingPage';





function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
      
    
    </div>
  );
}

export default App;