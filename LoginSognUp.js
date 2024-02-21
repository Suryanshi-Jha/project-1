import React, { useState } from 'react'
import './LoginSignUp.css'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const LoginSignUp= () => {
      const[action,setAction] = useState('Sign Up');
  return (
    <>
       <section>
      <div className="container">
        <form>
        <div className='header'>{action}</div>
          <div className="input-name-row">
            <div className="col">
            </div>
          </div>
          <div className="mb-1">&nbsp;</div>
          <div className="input-name">
            {action==="Login"? <div></div>: <div className="user-input-box">
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
        error // Add 'error' prop here
      />
      </Box>
            </div>}
          
          </div>
          <div className="mb-1">&nbsp;</div>
          <div className="input-name">
          <div className="user-input-box">
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your email Id"
        id="demo-helper-text-misaligned"
        label="Email Id"
        error
      />
      </Box>
            </div>
          </div>
          <div className="mb-1">&nbsp;</div>
          <div className="input-name">
          {action==="Sign Up"?<div></div>:<div className="user-input-box">
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter passward"
        id="demo-helper-text-misaligned"
        label="Passward"
        error
      />
      </Box>
            </div>}
          </div>
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="I agree all statements in Terms of service." />
           </FormGroup>
           <div className="forgot-password">Lost Passward? <span>Click Here!</span></div>
          <div className='Submit_container'>
            <div className={action==="login"?"submit grey":"submit"} onClick = {()=> {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign up"?"submit grey":"submit"} onClick = {()=> {setAction("Login")}}>Login</div>
          </div>
          </form>
          </div>
          </section>
    </>
  )
}

export default LoginSignUp;
