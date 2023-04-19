// Actions
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
// WHAT TO DO!
// Action Creator
export function addToDo(data) {
  return {
    type: ADD_TODO,
    payload: data,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}

export function updateTodo(data) {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  };
}
