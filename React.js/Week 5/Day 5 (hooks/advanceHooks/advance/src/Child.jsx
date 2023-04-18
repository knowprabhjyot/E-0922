import React, { memo } from 'react'
import { useState } from 'react';

function Child(props) {
    console.log("WHY I AM CALLED (CHILD)?")

    const handleClick = () => {
        // const randomValue = Math.random()
        props.updateCounterForChild();
    }
    
    return (
        <>
        <div>Child - {props.childCounter}</div>
        <button onClick={handleClick} >IncrementForChild</button>
        </>
    )
}

// This memo -- MEMOIZATION, its a technique used in JS which means we will cache value if that value is not changed
export default memo(Child); // HOF
