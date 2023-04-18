import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducer/reducer';

const store = createStore(rootReducer);

// Redux and React-redux
// Redux Toolkit (tomorrow)
// Redux Todo App (tomorrow)

// legacy means 

export default store;


// CONTEXT                REDUX
// context                 store
 // createContext             createStore(reducer)