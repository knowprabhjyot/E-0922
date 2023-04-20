export const FETCH_DATA = 'FETCH_DATA'

// action Creator
function fetchActionData(characters) {
    return {
        type: FETCH_DATA,
        payload: {
            data: characters
        }
    }
}

export default fetchActionData;