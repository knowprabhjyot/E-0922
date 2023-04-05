import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Box bgcolor="#f29494" display="flex" justifyContent="center" alignItems="center" height="100vh" gap="20px" flexDirection="column">
            <Typography variant='h2'>Are you a!</Typography>
            <Link to={"/user/login"}>
                <Typography variant="h3">User</Typography>
            </Link>
            <Link to={"/user/admin"}>
            <Typography variant="h3">Admin</Typography>
            </Link>
        </Box>
    )
}
