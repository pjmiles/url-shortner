import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/page/Home';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
