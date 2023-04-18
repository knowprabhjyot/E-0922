const INITIAL_VALUE = 0;

// How to do
function rootReducer(state = INITIAL_VALUE, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state +  1;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state;
    }
}

export default rootReducer;
