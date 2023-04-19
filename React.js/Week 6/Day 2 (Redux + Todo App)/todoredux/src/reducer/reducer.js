import { ADD_TODO } from "../action/action";

const initialState = {
  todos: [],
};

// HOW TO DO!
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // We are concatenating the previous array of todos with the new incoming object!
        todos: [...state.todos, action.payload]
      };
    default:
        return state;
  }
}

export default rootReducer;
