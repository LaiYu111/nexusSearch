import React, {useState} from "react";
import axios from "axios";
const Login = () =>{
  //登录
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');

  const handleLoginSubmit = () => {
    const loginData ={
        email:loginEmail,
        password:loginPassword,
    }
    axios.post('http://localhost:3000/login', loginData)
      .then(response => {
        setLoginEmailError('');
        setLoginPasswordError('');
        setLoginPassword('');
        setLoginEmail('');
        if (response.data === 'User not found'){
          setLoginEmailError("User not found");
          return;
        }
        if (response.data === "Incorrect password"){
          setLoginPasswordError("Your password is not correct.");
          return;
        }
        if (response.data === "Login successful"){
          setIsLoggedIn(true);
          alert("Login successful");
          setLoginEmailError('');
          setLoginPasswordError('');
          setLoginPassword('');
          setLoginEmail('');
        }
        
        // 在这里处理响应数据
      });
  };//如果全部通过就提交
  return(
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            
          />
          {loginEmailError && <div>{loginEmailError}</div>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          {loginPasswordError && <div>{loginPasswordError}</div>}
        </div>
        <div>
          
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;