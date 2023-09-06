import React from 'react'
import '../Login/login.scss'
import { useState } from 'react'
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { BiShow, BiSolidHide } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Login = () => { 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [showPassword,setShowPassword] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault()

        if(!email && !password){
            setError('Please enter')
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,email,password)
                
            } catch (error) {
                if(error.code === 'auth/user-not-found'){
                    setError('User not found')
                }else if(error.code === 'auth/wrong-password'){
                    setError('Invalid password')
                }else{
                    setError(error.message)
                }
        }
    }
}

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className='form-div'>
       <form className="form" onSubmit={handleLogin}>
    <h2 className='register-title'>Login</h2>
    <label>
    <input
     className='input'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      type="email"
      placeholder="Email" />
    </label>
      <label className='label'>
      <input
        className='input'
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         type={showPassword ? 'text' : 'password'}
         placeholder="Password" />
        <span className='span-show' onClick={togglePassword}>{showPassword ? <BiShow/> : <BiSolidHide/>}</span>
      </label>
       <button className='form-btn' type="submit">Submit</button>
       <p className="error">{error}</p>
     <Link to='/register'>Have you registered before</Link>
     </form>
    </div>
  )
}

export default Login
