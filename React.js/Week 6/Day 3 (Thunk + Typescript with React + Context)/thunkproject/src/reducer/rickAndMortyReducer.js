import { FETCH_DATA } from "../actions/rickAndMortyAction";

const initialState = {
  characters: JSON.parse(localStorage.getItem('characters')) || [],
};

function rickAndMortyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        characters: action.payload.data,
      };
    default:
      return state;
  }
}

export default rickAndMortyReducer;
