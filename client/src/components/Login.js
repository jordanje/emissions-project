import { useState } from "react"

export default function Login({submit}){
  const [ loginData, setLoginData ] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value})
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    submit(loginData)

    setLoginData({ email: '', password: '' });
  }
  

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <input 
        type='text' 
        name='email' 
        value={loginData.email} 
        onChange={handleLoginChange} 
        placeholder="Email"/>

        <input 
        type='text' 
        name='password' 
        value={loginData.password} 
        onChange={handleLoginChange} 
        placeholder="Password"/>

        <button 
        className='signup-btn' 
        type="submit">
          Log In
        </button>
      </form>
    </div>
  )
}