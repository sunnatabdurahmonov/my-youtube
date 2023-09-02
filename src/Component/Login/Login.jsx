import React, { useState } from 'react'
import '../Login/login.scss'
import  { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
    }
  return (
    <div className='login'>
      <h1 className='youtube-title'>YouTube</h1>
      <h1>Log in to YouTube</h1>
      <form className='form'>
        <input
        onChange={(e) => setEmail(e.target.value)}
        type="email" 
        placeholder='Phone number, email address' />
        <input
         onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder='Password'/>
     <div className="btn1">
    <button onClick={handleSubmit} className='btn'>Login</button>
     </div>
      </form>
    </div>
  )
}

export default Login

