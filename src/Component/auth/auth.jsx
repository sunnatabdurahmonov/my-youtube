import { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../config/firebase-config'


export const Auth = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const signIn = async () => {
await createUserWithEmailAndPassword(auth, email, password)
}
  return(
    <div>
      <input
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
       placeholder="Password" />
       <button onClick={signIn}>Sign in</button>
    </div>
  )
}
export default Auth
