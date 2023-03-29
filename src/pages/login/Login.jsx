import React,{useState} from 'react';
import './Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    setSubmitted(true);
  }
  function handleClear() {
    setUsername('');
    setPassword('');
  }

  return (
    <>
    <h1>Login Page</h1>
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label><br></br>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label><br></br>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <br></br>
      <div className='Button'>
      <button type='submit' >Login</button>
      <button type='submit'  onClick={handleClear}>Clear</button>
      </div>
      {submitted && (
        <div>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </form>
    </div>
    </>
    
  );
}

export default Login;