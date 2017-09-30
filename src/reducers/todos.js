import { RECEIVE_TODOS, ADD_TODO, UPDATE_TODO } from '../actions';

const todos = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case ADD_TODO:
      return state.concat([action.todo]);
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id.toString() === action.todo.id) {
          return {
            ...todo,
            completed: true
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
