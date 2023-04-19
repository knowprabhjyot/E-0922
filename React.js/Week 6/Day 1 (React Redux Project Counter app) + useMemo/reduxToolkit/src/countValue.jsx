import React from 'react'
import { useSelector } from 'react-redux'

export default function CountValue() {

    // useSelector is similar to useContext
    // I will try to see what the issue is here, we can discuss that tomorrow!
    const data = useSelector((state) => state.counter.value);
    console.log(data, "Data");
    return (
        <div>{data}</div>
    )
}
