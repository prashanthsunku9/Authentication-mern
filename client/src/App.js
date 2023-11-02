import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import Dashboard from './components/Dashboard';

function App() {
  return (
     <div>

<Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
</Routes>
     {/* <Home/> */}
     {/* <Login/>  */}

     </div>
  
  );
}

export default App;
