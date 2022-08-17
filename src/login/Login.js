import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const handleSubmit = async () => {
    setLoading(true);

    fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: userName, password: password})
    }).then((res) => {
        alert("Login success");
    }).catch((err) => {
        alert("Login error");
    }).finally(() => {
        setLoading(false);
    });
  };


  const userNameChange = (event) => {
    setUserName(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  const [userName, setUserName] = useState("admin@gmail.com");
  const [password, setPassword] = useState("password");
  
  const [loading, setLoading] = useState(false);

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={() => { handleSubmit(); }}>
        <label>
          <p>Username</p>
          <input className="input-field" type="text" onChange={userNameChange} value={userName} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={passwordChange} value={password} />
        </label>
        <div>
          {
            loading ? 
              <button>
                <i className="fa fa-spinner fa-spin"></i>
              </button> :
              <button type="submit">Submit</button>
          }
        </div>
      </form>
    </div>
  )
}