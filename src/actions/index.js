import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const REQUEST_TODOS = 'REQUEST_TODOS';
function requestTodos() {
  return {
    type: REQUEST_TODOS
  };
};

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
function receiveTodos(json) {
  return {
    type: RECEIVE_TODOS,
    todos: json,
  };
};

export function fetchTodos() {
  return dispatch => {
    dispatch(requestTodos())
    return fetch('http://quip-todos.herokuapp.com/get_todos?email=kystatham@gmail.com')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  };
};

export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO';
function requestAddTodo() {
  return {
    type: REQUEST_ADD_TODO
  };
};

export const ADD_TODO = 'ADD_TODO';
function receiveTodo(json) {
  return {
    type: ADD_TODO,
    todo: json,
  };
};

export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
function addTodoError(error) {
  return {
    type: ADD_TODO_ERROR,
    error,
  };
};

const generateEncodedBody = data => {
  let body = '';
  Object.keys(data).forEach(key => {
    body += key + '=' + encodeURIComponent(data[key]) + '&';
  });
  body.slice(0, -1);
  return body;
};

export function addTodo(text) {
  let bodyString = generateEncodedBody({ email: 'kystatham@gmail.com', text })
  return dispatch => {
    dispatch(requestAddTodo(text))
    return fetch('http://quip-todos.herokuapp.com/add_todo', {
      method: 'POST',
      body: bodyString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.text());
        }
        return response.json();
      })
      .then(json => dispatch(receiveTodo(json)))
      .catch(error => dispatch(addTodoError(error)));
  };
};

export const REQUEST_COMPLETE_TODO = 'REQUEST_COMPLETE_TODO';
function requestCompleteTodo() {
  return {
    type: REQUEST_COMPLETE_TODO
  };
};

export const UPDATE_TODO = 'UPDATE_TODO';
function updateTodo(json) {
  return {
    type: UPDATE_TODO,
    todo: json,
  };
};

export const COMPLETE_TODO_ERROR = 'COMPLETE_TODO_ERROR';
function completeTodoError(error) {
  return {
    type: COMPLETE_TODO_ERROR,
    error,
  };
};
export function completeTodo(todo) {
  let bodyString = generateEncodedBody({ email: 'kystatham@gmail.com', id: todo.id, completed: "true" })
  return dispatch => {
    dispatch(requestCompleteTodo(todo))
    return fetch('http://quip-todos.herokuapp.com/mark_completed', {
      method: 'POST',
      body: bodyString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.text());
        }
        return response.json();
      })
      .then(json => dispatch(updateTodo(json)))
      .catch(error => dispatch(completeTodoError(error)));
  };
};
