import { useContext, useState } from "react"
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../auth/register.scss'
import { BiShow, BiSolidHide } from "react-icons/bi"
import { HeaderContext } from "../Context/Context"


export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  const [showPassword2,setShowPassword2] = useState(false)
  const {theme} = useContext(HeaderContext)




  const handleSubmit =  async (e) => {
    e.preventDefault()

    if(!email && !password && !confirmPassword) {
      setError('Please fill in all')
      return
    }
    if(password.length < 6 && confirmPassword.length < 6){
      setError('Password must not be less than six characters')
      return
    }
     if(password !== confirmPassword) {
      setError('Confirm is not correct')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      
    } catch (error) {
     console.log(error) 
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
}

const togglePassword2 = () => {
  setShowPassword2(!showPassword2)
}



  return(
    <>
      <form className="form" onSubmit={handleSubmit}>
    <h2 className="register-title">Register</h2>
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
        <span className='span-show' onClick={togglePassword}>{showPassword ? <BiShow className={theme === false ? 'icon-register' :'icon-register-2' }/> : <BiSolidHide/>}</span>
      </label>
      <label className='label'>
      <input
         className='input'
         onChange={(e) => setConfirmPassword(e.target.value)}
         value={confirmPassword}
         type={showPassword2 ? 'text' : 'password'}
        placeholder="Confirm password" />  
         <span className='span-show' onClick={togglePassword2}>{showPassword2 ? <BiShow/> : <BiSolidHide/>}</span>
      </label>
       <button className='form-btn' type="submit">Submit</button>
       <p className="error">{error}</p>
     </form>
    </>
    //  <div className={theme === false ? 'form-div' : 'form-div-2' }>
    // </div>
  )
}
export default Register
