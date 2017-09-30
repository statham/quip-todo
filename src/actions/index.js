import fetch from 'isomorphic-fetch';

export const REQUEST_TODOS = 'REQUEST_TODOS';
function requestTodos() {
  return {
    type: REQUEST_TODOS
  }
}

export const RECIEVE_TODOS = 'RECIEVE_TODOS';
function recieveTodos(json) {
  return {
    type: RECIEVE_TODOS,
    todos: json,
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(requestTodos())
    return fetch('http://quip-todos.herokuapp.com/get_todos?email=example@gmail.com')
      .then(response => response.json())
      .then(json => dispatch(recieveTodos(json)))
  }
}
