import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CharacterCard({ characterValue }) {

    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box>
                <img src='' alt='' />
            </Box>
            <CardContent>
                <h1>{characterValue.name}</h1>
                <Button variant="contained" disableElevation onClick={() => navigate(`/character/${characterValue.id}`)}>
                   Go To Profile Page
                </Button>
            </CardContent>
        </Card>
    )
}
