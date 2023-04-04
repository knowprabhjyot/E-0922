import { Alert, Box, Snackbar, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import CustomButton from '../../../components/CustomButton'
import classes from './user-signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import CustomSnackbar from '../../../components/CustomSnackbar';

export default function UserSignup() {

  // Controlled Forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // UnControlled Forms
  // const emailRef = useRef();

  const signupSubmit = () => {
    setIsLoading(true);
    // console.log(email, userName, password);

    // console.log(emailRef.current.value);

    const newUser = {
      email,
      userName,
      password
    }

    // I want to check if the localstorage already contains a user list
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    const alreadyExists = userList.find((user) => user.email === email);
    if (alreadyExists) {
      setSeverity('error');
      setMessage('User Already exists');
    } else {
      userList.push(newUser);
      localStorage.setItem('userList', JSON.stringify(userList));
      setSeverity('success');
      setMessage('Succesfully Registered');
      
      setTimeout(() => {
        navigate('/user/login');
        setIsLoading(false);
      }, 2000);
    }

    setOpenAlert(true);   
  }

  const handleClose = () => {
    setOpenAlert(false);
  }

  return (
    <Box bgcolor="gray" display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" gap="20px">
      {/* <input type="text" ref={emailRef} /> */}
      <Typography variant='h3'>Welcome to Signup page!</Typography>
      <TextField value={userName} onChange={(event) => setUsername(event.target.value)} color='secondary' placeholder='Enter Username' className={classes.width400} id="login-username" type="text" label="Username" variant="outlined" />
      <TextField value={email} onChange={(event) => setEmail(event.target.value)} color='secondary' placeholder='Enter Email' className={classes.width400} id="login-email" type="email" label="Email" variant="outlined" />
      <TextField value={password} onChange={(event) => setPassword(event.target.value)} color='secondary' placeholder='Enter Password' className={classes.width400} id="login-password" type="password" label="Password" variant="outlined" />

      <Link to="/user/login">Already have an account ?</Link>
      <CustomButton handleClick={signupSubmit} title="Sign up" color="secondary" variant="contained" />

      <CustomSnackbar message={message} severity={severity} openAlert={openAlert} handleClose={handleClose} />

    </Box>
  )
}
