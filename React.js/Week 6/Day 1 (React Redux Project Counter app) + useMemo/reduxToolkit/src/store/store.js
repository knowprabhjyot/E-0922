import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

// Redux and React-redux
// Redux Toolkit (tomorrow)
// Redux Todo App (tomorrow)

// legacy means 

export default store;


// CONTEXT                REDUX
// context                 store
 // createContext             createStore(reducer)