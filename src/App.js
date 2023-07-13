import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/dashboard' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
