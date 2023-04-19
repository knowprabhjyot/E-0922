import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducer/reducer";

const store = createStore(rootReducer);

export default store;
