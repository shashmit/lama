import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "../css/Register.css"
import Lama from "../Images/FunkyLamaMascot.png"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='Image'>
          <img src={Lama} alt="cool lama"/>
        </div>
        <div className='content'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
          <form>
            <TextField variant='standard' label="Username" type='String'/>
            <TextField variant='standard' label="Email" type="email"/>
            <TextField variant='standard' label="Password" type='password' />
            <input style={{display:"none"}} id="file" type='file'/>
            <label htmlFor='file'>
              <p>Image+</p>
            </label>
            <Button variant='contained' style={{backgroundColor: "#5d5b8d"}}>Sign Up</Button>
          </form>
          <p>You do have account? Login</p>
        </div>
      </div>
    </div>
  )
}

export default Register