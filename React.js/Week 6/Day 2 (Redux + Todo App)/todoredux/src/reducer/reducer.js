import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../action/action";

const initialState = {
  todos: [],
};

// HOW TO DO!
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // We are concatenating the previous array of todos with the new incoming object!
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        // We filter those items whose id is not equal to the incoming id called from the UI
        // Its upto if you want to use splice
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          } else {
            return todo;
          }
        }),
      };

    case COMPLETE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              // So here i am taking previous todo value, and adding the completed as true if it was false before and vice versa
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
}

export default rootReducer;
