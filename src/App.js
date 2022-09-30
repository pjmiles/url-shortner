import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
