// What to do ?

export function incrementValue(countValue) {
    return {
        type: 'INCREMENT',
        payload: countValue
    }
}

export function decrementValue(countValue) {
    return {
        type: 'DECREMENT',
        payload: countValue
    }
}


// Redux Toolkit  (CounterSlice.js)

// Redux and Redux TOolkit are same things

// Redux toolkit it makes your life a little easier for beginners