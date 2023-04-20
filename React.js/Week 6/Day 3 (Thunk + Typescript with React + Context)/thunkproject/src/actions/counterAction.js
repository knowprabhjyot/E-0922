// Actions
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


// Action Creators
export function incrementCount(countValue) {
    return {
        type: INCREMENT,
        payload: countValue
    }
}

export function decrementCount(countValue) {
    return {
        type: DECREMENT,
        payload: countValue
    }
}