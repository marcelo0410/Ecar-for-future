import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/components/project-logo.png'
import './signin.css'


export default function Login(props) {

  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const navigate = useNavigate()
  const loginInfo = {
    usernameAdmin: 'admin',
    passwordAdmin: 'ta34'
  }

  const userValidate = (event) =>{
    event.preventDefault()
    if(loginUsername === loginInfo.usernameAdmin && loginPassword === loginInfo.passwordAdmin){
      localStorage.setItem('token','123')
      setErrorMsg(false)
      navigate("/home")
    } else{
      setErrorMsg(true)
    }
  }

  return (
    <main class="form-signin" style={{paddingTop:"130px"}}>
      <form onSubmit={userValidate}>
        <div style={{justifyContent:"center", display:"flex"}}>
          {/* <img class="mb-4" src={icon} alt="" width="65" height="65"/> */}
        </div>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input type="username" class="form-control" id="floatingInput" placeholder="name@example.com" value={loginUsername} onChange={(e)=>{setLoginUsername(e.target.value)}}/>
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input type="new-password" class="form-control" id="floatingPassword" placeholder="Password" value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg mt-3" style={{backgroundColor:"#55C595", color:"white"}} type="submit" >Sign in</button>
        {errorMsg && <div style={{color:"red"}}>Please enter correct user information!</div>}
      </form>
    </main>
  )
}
