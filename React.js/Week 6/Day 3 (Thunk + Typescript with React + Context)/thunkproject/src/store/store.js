import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "../reducer/counterReducer";
import rickAndMortyReducer from "../reducer/rickAndMortyReducer";
import thunk from 'redux-thunk';
import  { composeWithDevTools } from 'redux-devtools-extension';

// We can combine as many as reducers!
const rootReducer = combineReducers({
  count: counterReducer,
  ram: rickAndMortyReducer,
});



const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
    localStorage.setItem('characters', JSON.stringify(store.getState().ram.characters))
    localStorage.setItem('count', JSON.stringify(store.getState().count.count));
})

export default store;
