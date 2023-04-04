import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';
import classes from './userLogin.module.css';
import CustomButton from '../../../components/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import CustomSnackbar from '../../../components/CustomSnackbar';

export default function UserLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => {
        setOpenAlert(false);
      }
    

    const loginSubmit = () => {
        setIsLoading(true);
        const userList = JSON.parse(localStorage.getItem('userList')) || [];
        const foundUser = userList.find((user) => user.email === email);

        if (foundUser) {
            if (foundUser.password === password) {
                setSeverity('success');
                setMessage('Logged In Succesfully!');

                localStorage.setItem('current-user', foundUser);

                setTimeout(() => {
                    navigate('/user/home');
                    setIsLoading(false);
                }, 2000);

            } else {
                setSeverity('error');
                setMessage('Password icorrect');
                setIsLoading(false);
            }
        } else {
            setSeverity('warning');
            setMessage('User doesnt exist, please register');
            setIsLoading(false);
        }

        setOpenAlert(true);
        // Verify if the user exists with right credentials
        // then send it to the home page
    }

    return (
        <Box bgcolor="gray" display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" gap="20px">
            <Typography variant='h3'>Welcome to login page!</Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} color='secondary' placeholder='Enter Email' className={classes.width400} id="login-email" type="email" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} color='secondary' placeholder='Enter Password' className={classes.width400} id="login-password" type="password" label="Password" variant="outlined" />
            <Link to="/user/signup">Don't have an account ?</Link>
            <CustomButton isLoading={isLoading} handleClick={loginSubmit} title="Sign in" color="primary" variant="contained" />

            <CustomSnackbar message={message} severity={severity} openAlert={openAlert} handleClose={handleClose} />

        </Box>
    )
}
