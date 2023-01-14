import { useState } from "react"

export default function Signup(){
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleFormChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(user => console.log(user))

  }

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <input type='text' name='firstname' value={formData.firstname}  onChange={handleFormChange} placeholder="First Name"/>
        <input type='text' name='lastname' value={formData.lastname}  onChange={handleFormChange} placeholder="Last Name"/>
        <input type='text' name='email' value={formData.email}  onChange={handleFormChange} placeholder="Email"/>
        <input type='password' name='password' value={formData.password}  onChange={handleFormChange} placeholder="Password"/>
        <button className='signup-btn' type="submit">Sign up</button>
      </form>
    </div>
  )
}