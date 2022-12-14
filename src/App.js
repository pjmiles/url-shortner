import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/page/Home';
import LoginForm from './components/login/LoginForm';
import SignUpForm from './components/signup/SignUpForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
