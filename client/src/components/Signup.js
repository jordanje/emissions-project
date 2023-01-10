export default function Signup(){
  return (
    <div className="signup-form-container">
      <form className="signup-form">
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name"/>
        <input type='text' placeholder="Email"/>
        <input type='text' placeholder="Password"/>
        <button className='signup-btn' type="submit">Sign up</button>
      </form>
    </div>
  )
}