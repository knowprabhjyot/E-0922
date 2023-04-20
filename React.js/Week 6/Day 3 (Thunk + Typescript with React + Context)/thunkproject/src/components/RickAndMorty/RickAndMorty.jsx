import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';


const RickAndMortyContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
`


const RickAndMortyCard = styled.div`
    border: 1px solid white;
`

export default function RickAndMorty() {
    const data = useSelector(state => state.ram.characters);
    console.log(data, 'data');
    return (
        <RickAndMortyContainer>
            {
              data?.results.length > 0 &&  data.results.map((character) => {
                    return <RickAndMortyCard>
                        <img src={character.image} />
                        <h1>{character.name}</h1>
                    </RickAndMortyCard>
                })
            }
        </RickAndMortyContainer>
    )
}
