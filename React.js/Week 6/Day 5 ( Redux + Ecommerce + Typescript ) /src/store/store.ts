import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { CartReducer } from "../reducers/cartReducer";
import { ProductReducer } from "../reducers/productReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: CartReducer,
  product: ProductReducer,
});

// Why do we need thunks ?
// Since our action creators are synchronous in nature, but we will be using api calls,
// which are asynchronous in nature, so our action creators might not work as expected.
// that's why we need a middleware that tells the store in redux, that the api data is fetched,
// and it updates the store as well.

const store = createStore(ProductReducer, applyMiddleware(thunk));

export default store;
