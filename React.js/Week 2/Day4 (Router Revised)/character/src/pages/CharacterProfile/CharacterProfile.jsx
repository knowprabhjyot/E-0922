import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function CharacterProfile() {

  const { id } = useParams();

  const [characterInfo, setCharacterInfo ] = useState({});

  useEffect(() => {
    getCharacterDataById();
  }, []);

  const getCharacterDataById =  async () => {
    const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
    setCharacterInfo(data);
    console.log(data, "data");
  }

  return (
    <div>
       <Paper elevation={3} >
        <Box padding={8}>
            <h1>Character Profile</h1>
            <h2>Full Name: {characterInfo.name}</h2>
            <h2>Height: {characterInfo.height}</h2>
            <h2>Mass: {characterInfo.mass}</h2>
            <h2>Eye Color: {characterInfo.eye_color}</h2>
        </Box>
        </Paper>
    </div>
  )
}
