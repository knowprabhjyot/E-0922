import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <div>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                        <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
                        <Button color="inherit" onClick={() => navigate('/character')}>Character</Button>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
