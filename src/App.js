import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Top from './components/top/Top.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Top/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
