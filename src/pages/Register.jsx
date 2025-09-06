import React, {useState} from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  

  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
     <div className='signUp-page'>
      <div className='signUp-left'>
        <img src= "" alt="" />
      </div>

      <div className='signUp-right'>
        <div className='title'>
          <h1>Create an account</h1>
        <p>Enter your details below</p>
        </div>
        

        <div className='inputs'>
          <input type="text" placeholder='Name'/>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='Email or Phone Number'/>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder='Password'/>
        </div>

        <div className='btns'>
          <button onClick={createUser}>Create Account</button>
          <button className='googleAcc'>
            <img src="" alt="" />
            <p>Sign up with Google</p>
          </button>
        </div>

        <div className='links'>
          <p>Already have account?</p>
          <Link to="/login"><p className='login'>Log in</p></Link>
        </div>
      </div>
    </div> Register
    </div>
  )
}

export default Register
