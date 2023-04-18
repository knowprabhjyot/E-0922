import React from 'react'
import { useSelector } from 'react-redux'

export default function CountValue() {

    // useSelector is similar to useContext
    const data = useSelector(state => state);
    return (
        <div>{data}</div>
    )
}
