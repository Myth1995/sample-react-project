import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route
              path="/"
              element={<Navigate to="/register" replace />}
          />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
