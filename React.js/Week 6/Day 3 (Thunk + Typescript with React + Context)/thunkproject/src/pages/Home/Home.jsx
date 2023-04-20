import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import fetchActionData from '../../actions/rickAndMortyAction';
import RickAndMorty from '../../components/RickAndMorty/RickAndMorty';
export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character').then((data) => {
            return data.json();
        }).then((dataWithJSON) => {
            dispatch(fetchActionData(dataWithJSON));
        })
    }, [dispatch]);

    return (
        <div>
            <RickAndMorty />
        </div>
    )
}
