import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CharacterCard from '../../components/Card';
import Box from '@mui/material/Box';

export default function CharacterPage() {


    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        getCharacterData();
    }, [])

    const getCharacterData = async () => {
        const { data } = await axios.get('https://swapi.dev/api/people/');
        const modifiedData = data.results.map((character, index) => {
            character.id = index + 1
            return character;
        })
        setCharacterData(modifiedData);
    }
    return (
        <Box margin={2} display="grid" gridTemplateColumns="auto auto auto" gap={8}>
            {
                characterData.map((characterValue) => {
                    return <CharacterCard characterValue={characterValue} />
                })
            }
        </Box>
    )
}
